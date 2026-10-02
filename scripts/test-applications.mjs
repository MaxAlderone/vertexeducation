import assert from "node:assert/strict";
import {execFileSync} from "node:child_process";
import {mkdtempSync, rmSync} from "node:fs";
import {createRequire} from "node:module";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {fileURLToPath} from "node:url";

// Compile only the endpoint and validator, then mock outbound fetch. No real
// credentials, external requests, or production records are involved.
const root = fileURLToPath(new URL("../", import.meta.url));
const output = mkdtempSync(join(tmpdir(), "vertex-applications-"));
const realFetch = globalThis.fetch;
const savedUrl = process.env.SUPABASE_URL;
const savedKey = process.env.SUPABASE_SECRET_KEY;
let passed = 0;
try {
  execFileSync(process.execPath, [
    join(root, "node_modules/typescript/bin/tsc"),
    "app/api/applications/route.ts", "lib/application-input.ts",
    "--outDir", output, "--module", "commonjs", "--target", "es2022",
    "--moduleResolution", "node", "--esModuleInterop", "--skipLibCheck", "--strict",
  ], {cwd: root, stdio: "inherit"});
  const require = createRequire(import.meta.url);
  const {POST} = require(join(output, "app/api/applications/route.js"));
  const {parseApplication} = require(join(output, "lib/application-input.js"));
  const student = {
    submissionId: "12345678-1234-4123-8123-123456789012", kind: "student",
    firstName: " Sample ", lastName: "Student", email: " SAMPLE@example.com ",
    context: "India", school: "Example school", grade: "10th grade",
    subject: "Mathematics", interests: "Number theory", timezone: "Asia/Kolkata",
    availability: "Weekends", goals: "Learn research", website: "",
  };
  const mentor = {...student, kind: "mentor", context: "Researcher", institution: "Example institute", degree: "PhD"};
  const request = (data, options = {}) => new Request("https://vertex.example/api/applications", {
    method: "POST",
    headers: {origin: "https://vertex.example", "content-type": "application/json", ...options.headers},
    body: typeof data === "string" ? data : JSON.stringify(data),
  });
  const check = async (name, run) => {await run(); passed++; console.log(`✓ ${name}`);};
  let calls = [];
  let response = () => new Response(null, {status: 201});
  globalThis.fetch = async (url, options) => {calls.push({url, options}); return response();};
  process.env.SUPABASE_URL = "https://example.supabase.co";
  process.env.SUPABASE_SECRET_KEY = "sb_secret_mock_only";

  await check("student fields are normalized and privileged input is discarded", () => {
    const parsed = parseApplication({...student, status: "closed", created_at: "1999-01-01"});
    assert.equal(parsed.first_name, "Sample");
    assert.equal(parsed.email, "sample@example.com");
    assert.equal(parsed.professional_role, null);
    assert.equal(parsed.status, undefined);
    assert.equal(parsed.created_at, undefined);
  });
  await check("mentor-specific fields are required and student fields are omitted", () => {
    const parsed = parseApplication(mentor);
    assert.equal(parsed.institution, "Example institute");
    assert.equal(parsed.country, null);
    assert.equal(parsed.grade, null);
    assert.equal(parseApplication({...mentor, degree: ""}), null);
  });
  await check("invalid, oversized, and missing fields are rejected", () => {
    for (const data of [null, [], {...student, email: "invalid"}, {...student, firstName: " "},
      {...student, interests: "x".repeat(5001)}, {...student, grade: "unknown"},
      {...student, subject: "unknown"}, {...student, submissionId: "bad"}, {...student, kind: "admin"}]) {
      assert.equal(parseApplication(data), null);
    }
  });
  await check("student and mentor submissions write only through the server", async () => {
    for (const data of [student, mentor]) {
      const result = await POST(request(data));
      assert.equal(result.status, 201);
      assert.deepEqual(await result.json(), {ok: true});
      const sent = calls.at(-1);
      assert.equal(sent.url.origin, "https://example.supabase.co");
      assert.equal(sent.options.headers.apikey, "sb_secret_mock_only");
      assert.equal(JSON.parse(sent.options.body).kind, data.kind);
      assert.equal(sent.options.redirect, "error");
    }
  });
  await check("retries preserve the UUID and request duplicate-safe inserts", async () => {
    await POST(request(student));
    await POST(request(student));
    assert.equal(calls.at(-1).options.body, calls.at(-2).options.body);
    assert.match(calls.at(-1).options.headers.Prefer, /resolution=ignore-duplicates/);
  });
  await check("cross-origin, malformed, honeypot, and oversized requests never reach storage", async () => {
    calls = [];
    assert.equal((await POST(request(student, {headers: {origin: "https://other.example"}}))).status, 403);
    assert.equal((await POST(request(student, {headers: {"content-type": "text/plain"}}))).status, 415);
    assert.equal((await POST(request("{"))).status, 400);
    assert.equal((await POST(request({...student, website: "spam"}))).status, 400);
    assert.equal((await POST(request({...student, email: "invalid"}))).status, 400);
    assert.equal((await POST(request("x".repeat(48_001)))).status, 413);
    assert.equal(calls.length, 0);
  });
  await check("missing Vercel configuration fails without a false confirmation", async () => {
    delete process.env.SUPABASE_SECRET_KEY;
    calls = [];
    const result = await POST(request(student));
    assert.equal(result.status, 503);
    assert.equal((await result.json()).ok, undefined);
    assert.equal(calls.length, 0);
    process.env.SUPABASE_SECRET_KEY = "sb_secret_mock_only";
  });
  await check("database throttling becomes a recoverable 429", async () => {
    response = () => Response.json({code: "P0001", message: "application_rate_limit"}, {status: 400});
    assert.equal((await POST(request(student))).status, 429);
  });
  await check("provider errors and network failures do not leak contents or show success", async () => {
    const originalError = console.error;
    const logs = [];
    console.error = (...args) => logs.push(args);
    try {
      response = () => Response.json({message: "private provider detail"}, {status: 401});
      let result = await POST(request(student));
      assert.equal(result.status, 503);
      assert.doesNotMatch(await result.text(), /private provider detail|sb_secret/);
      response = () => {throw new Error("private network detail");};
      result = await POST(request(student));
      assert.equal(result.status, 503);
      assert.doesNotMatch(await result.text(), /private network detail|sb_secret/);
      assert.doesNotMatch(JSON.stringify(logs), /private|sb_secret|sample@example.com/);
    } finally {
      console.error = originalError;
    }
  });
  console.log(`${passed} application checks passed. Database migration and live deployment still require verification.`);
} finally {
  globalThis.fetch = realFetch;
  if (savedUrl === undefined) delete process.env.SUPABASE_URL; else process.env.SUPABASE_URL = savedUrl;
  if (savedKey === undefined) delete process.env.SUPABASE_SECRET_KEY; else process.env.SUPABASE_SECRET_KEY = savedKey;
  rmSync(output, {recursive: true, force: true});
}

import {parseApplication} from "../../../lib/application-input";

export const runtime = "nodejs";

const unavailable = "We couldn’t save your application. Your entries are still here. Please try again later.";
const reply = (body: object, status: number) => Response.json(body, {status, headers: {"Cache-Control": "no-store"}});

export async function POST(request: Request) {
  // Browsers must submit from this website, not an unrelated third-party form.
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return reply({error: "Please submit using the form on this website."}, 403);
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return reply({error: "Invalid submission format."}, 415);
  }

  // Bound actual bytes, including requests without a Content-Length header.
  const reader = request.body?.getReader();
  if (!reader) return reply({error: "Please complete the application form."}, 400);
  let input: unknown;
  try {
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const {value, done} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 48_000) {
        await reader.cancel();
        return reply({error: "Your application is too long. Please shorten your answers."}, 413);
      }
      chunks.push(value);
    }
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply({error: "Invalid submission format."}, 400);
  }
  if (input && typeof input === "object" && "website" in input && input.website) {
    return reply({error: "Unable to submit this application."}, 400);
  }
  const application = parseApplication(input);
  if (!application) return reply({error: "Please check your required fields, email address, and answer lengths."}, 400);

  // Read only at request time: local builds need no credentials.
  const projectUrl = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!projectUrl || !key) return reply({error: unavailable}, 503);

  try {
    const url = new URL("/rest/v1/applications?on_conflict=id", projectUrl);
    if (url.protocol !== "https:") return reply({error: unavailable}, 503);
    const result = await fetch(url, {
      method: "POST",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      body: JSON.stringify(application),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
      redirect: "error",
    });
    if (!result.ok) {
      const error = await result.json().catch(() => null);
      if (error?.code === "P0001" && error?.message === "application_rate_limit") {
        return reply({error: "Too many applications for this email address. Please try again in an hour."}, 429);
      }
      // Do not return provider errors or log credentials/application contents.
      console.error("Application storage failed", {status: result.status});
      return reply({error: unavailable}, 503);
    }
    return reply({ok: true}, 201);
  } catch {
    console.error("Application storage request failed");
    return reply({error: unavailable}, 503);
  }
}

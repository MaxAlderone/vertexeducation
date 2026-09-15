import {spawnSync} from "node:child_process";
import {mkdirSync, readFileSync, rmSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {join} from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const env = {...process.env, VERCEL_TELEMETRY_DISABLED: "1"};
const run = (command, args, capture = false) => {
  const result = spawnSync(command, args, {cwd: root, env, encoding: "utf8", stdio: capture ? "pipe" : "inherit"});
  if (result.error || result.status !== 0) {
    if (capture && result.stderr) process.stderr.write(result.stderr);
    throw new Error(`${command} ${args.join(" ")} failed. ${result.error?.message ?? "Fix the error above, then run npm run publish:site again."}`);
  }
  return result.stdout?.trim() ?? "";
};

let lock;
let locked = false;
const releaseLock = () => {
  if (locked) { rmSync(lock, {recursive: true, force: true}); locked = false; }
};
process.once("SIGINT", () => { releaseLock(); process.exit(130); });
process.once("SIGTERM", () => { releaseLock(); process.exit(143); });
try {
  const branch = run("git", ["branch", "--show-current"], true);
  if (branch !== "main") throw new Error("Switch to the main branch before publishing the live website.");
  const remote = run("git", ["remote", "get-url", "origin"], true);
  if (remote !== "https://github.com/MaxAlderone/vertexeducation.git") throw new Error("The origin repository has changed. Review the publishing script before continuing.");
  const project = JSON.parse(readFileSync(join(root, ".vercel/project.json"), "utf8"));
  if (project.projectId !== "prj_KkruSiCW7p4lrlv4ORTkZ0DeWlfF") throw new Error("This checkout is not linked to the expected Vertex Vercel project.");

  lock = join(run("git", ["rev-parse", "--absolute-git-dir"], true), "vertex-publish.lock");
  try { mkdirSync(lock); locked = true; }
  catch { throw new Error("Another publication is running. Wait for it to finish. If a previous run was interrupted, remove .git/vertex-publish.lock and retry."); }

  console.log("\nChecking GitHub for newer changes…");
  run("git", ["fetch", "origin", "main"]);
  run("git", ["merge-base", "--is-ancestor", "origin/main", "HEAD"]);

  console.log("\nChecking and building the website…");
  run("npm", ["run", "lint"]);
  run("npm", ["run", "build", "--", "--webpack"]);

  console.log("\nSaving changes to GitHub…");
  // Keep Next.js's generated development/build type import out of routine commits.
  run("git", ["add", "--all", "--", ".", ":(exclude)next-env.d.ts"]);
  const staged = run("git", ["diff", "--cached", "--name-only"], true);
  if (staged) {
    const message = process.argv.slice(2).join(" ") || `Update Vertex Research website (${new Date().toISOString().slice(0, 10)})`;
    run("git", ["commit", "-m", message]);
  }
  run("git", ["push", "origin", "main"]);
  const commit = run("git", ["rev-parse", "HEAD"], true);

  console.log("\nPublishing to Vercel…");
  run("npx", ["--yes", "--package", "vercel@59.17.0", "vercel", "deploy", "--prod", "--yes"]);
  console.log(`\nPublished successfully.\nGitHub: https://github.com/MaxAlderone/vertexeducation/commit/${commit}\nWebsite: https://vertexeducation-xi.vercel.app`);
} catch (error) {
  console.error(`\nPublication stopped: ${error.message}`);
  process.exitCode = 1;
} finally {
  releaseLock();
}

# Vertex Education

A responsive public website prototype for a one-to-one student research mentorship company. The implementation follows `WEBSITE_SPEC.md` and uses Next.js App Router, TypeScript, React, and Tailwind CSS.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content and prototype status

Brand details and reusable content live in `lib/site-data.ts`. Application and contact forms intentionally do not transmit or persist information yet. Pricing, program duration, formal policies, mentor profiles, contact email, and other business details marked TBD in the product specification are not invented in the interface.

## Publish local changes

Run `npm run publish:site`, or double-click `publish-changes.command` on this Mac.

This checks for newer changes on GitHub, runs lint and a production build, commits
and pushes your local changes to `MaxAlderone/vertexeducation`, then deploys to
https://vertexeducation-xi.vercel.app. The live site stays unchanged while you edit.
Finish saving your edits before starting the command and wait for it to complete.

To supply a commit message:

```bash
npm run publish:site -- "Update programs and mentor profiles"
```

Publishing requires GitHub push access, a Vercel CLI login, the `main` branch,
and this checkout's existing `.vercel/project.json` link. Keep credentials in
Git/macOS Keychain and Vercel's login storage; do not add them to source files.

If GitHub has newer commits, reconcile those changes before publishing. If Vercel
fails after the push, the changes are already saved in GitHub; rerun the command
to retry deployment. Direct Vercel deployment is intentional: GitHub automatic
deployment is not currently connected, so this command performs both steps.

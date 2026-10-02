# Application storage setup

Student and mentor applications share `public.applications`, distinguished by
`kind`. Status starts at `new`; staff can review records in the Supabase Table
Editor. No applicant accounts, emails, or contact-form delivery are added yet.

## 1. Create the table

Open the Vertex project in Supabase, then **SQL Editor → New query**. Paste the
entire contents of `supabase/migrations/202610030001_applications.sql` and run it
once. It creates the table, private access rules, and an insert trigger. It does
not delete or modify existing business data. If `applications` already exists,
stop and inspect its schema rather than deleting it or skipping errors.

The table has row-level security and no public policies. `anon` and
`authenticated` cannot access it. The website's server uses the secret key with
`service_role` privileges. Only select and insert are granted to that role on
this table; staff can change statuses in the dashboard using their project access.

## 2. Configure Vercel

Set `SUPABASE_URL` and `SUPABASE_SECRET_KEY` in the Vercel project's Production
environment. Use the project URL and a key beginning with `sb_secret_`. Do not
prefix the secret with `NEXT_PUBLIC_`. Keep the real credentials only in Vercel;
do not pull them into this checkout or paste them into chat.

No keys are needed for lint, type-check, build, or the mocked application tests.
Local form submissions return a recoverable error when credentials are absent.
Preview deployments also need their own configuration if live testing there is
desired; prefer a separate test project for previews.

## 3. Deploy and verify

After the SQL succeeds, publish using `npm run publish:site`. This deploys the
new server endpoint as well as the forms; saving environment variables alone
does not update an existing deployment.

Use synthetic information to submit one student application and one mentor
application. In **Table Editor → applications**, verify all answers, the `kind`,
the submission time, and `status = new`. Verify both mentor entry points
(`/become-a-mentor` and `/become-a-mentor/apply`). Remove test records in the
dashboard when finished. Applicants see success only after the database accepts
the submission. No email is sent at this stage; check the table for new records.

Network/provider failures keep the form values so applicants can retry. An
unchanged retry reuses its UUID within that page session, preventing duplicate
inserts after a lost response. Refreshing starts a new session. A hidden honeypot
and a database limit of five applications per email per hour provide basic spam
protection. They do not stop determined bots using different email addresses;
add a WAF rule or CAPTCHA if traffic requires stronger controls.

The privacy page describes the implemented data flow; it is not a finalized
legal policy. Retention periods, privacy contact details, and other business
policies still need the owner's decisions as recorded in WEBSITE_SPEC.md.

## Troubleshooting

- **503 / could not save:** Check Vercel variable names and environment, redeploy,
  and confirm the SQL ran in the same project as `SUPABASE_URL`. The server logs
  only the provider HTTP status, never submitted answers or secret keys.
- **429:** Wait an hour or use a different synthetic email for further tests.
- **403:** Submit through the website on the same origin as the API endpoint.
- **No email:** Expected until email delivery is implemented separately.

Run `npm run test:applications` for mocked endpoint and validation checks.

-- Run once in this project's Supabase SQL Editor before deploying the forms.
begin;

create table public.applications (
  id uuid primary key,
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'reviewing', 'contacted', 'closed')),
  kind text not null check (kind in ('student', 'mentor')),
  first_name text not null,
  last_name text not null,
  email text not null,
  country text,
  school text,
  grade text,
  professional_role text,
  institution text,
  degree text,
  subject text not null,
  interests text not null,
  timezone text not null,
  availability text not null,
  goals text not null default '',
  constraint application_fields_match_kind check (
    (kind = 'student' and country is not null and school is not null and grade is not null
      and professional_role is null and institution is null and degree is null)
    or
    (kind = 'mentor' and professional_role is not null and institution is not null and degree is not null
      and country is null and school is null and grade is null)
  )
);

create index applications_email_created_at_idx on public.applications (email, created_at desc);
alter table public.applications enable row level security;
revoke all on public.applications from public, anon, authenticated, service_role;
grant select, insert on public.applications to service_role;
-- No public policies: visitors cannot read, update, or directly insert applications.

-- A persistent email limit works across Vercel instances. The honeypot in the
-- website is an additional basic spam check, not a substitute for a WAF/CAPTCHA.
create function public.guard_application_insert()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(new.email, 0));
  -- Retrying a request after a lost response must not create another record.
  if exists (select 1 from public.applications where id = new.id) then
    return null;
  end if;
  if (select count(*) from public.applications
      where email = new.email and created_at > now() - interval '1 hour') >= 5 then
    raise exception 'application_rate_limit' using errcode = 'P0001';
  end if;
  return new;
end;
$$;

revoke all on function public.guard_application_insert() from public, anon, authenticated;
grant execute on function public.guard_application_insert() to service_role;
create trigger guard_application_insert
before insert on public.applications
for each row execute function public.guard_application_insert();

commit;

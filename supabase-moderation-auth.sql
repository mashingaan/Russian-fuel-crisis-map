-- Moderator console setup for /moderate.html.
-- Run once in Supabase SQL Editor.
--
-- 1) In Supabase Authentication, create/sign in a user with your email.
-- 2) Replace YOUR_EMAIL@example.com below with that exact email.
-- 3) Run this file.
-- 4) Open /moderate.html and sign in.

create table if not exists public.moderator_allowlist (
  email text primary key,
  created_at timestamptz not null default now(),
  check (position('@' in email) > 1)
);

alter table public.moderator_allowlist enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.moderator_allowlist to authenticated;
grant select, insert on public.fuel_signals to anon;
grant select, update on public.fuel_signals to authenticated;

insert into public.moderator_allowlist (email)
values ('YOUR_EMAIL@example.com')
on conflict (email) do nothing;

create or replace function public.is_fuel_map_moderator()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.moderator_allowlist
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

revoke all on function public.is_fuel_map_moderator() from public;
grant execute on function public.is_fuel_map_moderator() to authenticated;

drop policy if exists "moderators can read own allowlist row" on public.moderator_allowlist;
create policy "moderators can read own allowlist row"
on public.moderator_allowlist
for select
to authenticated
using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

drop policy if exists "public can submit pending fuel signals" on public.fuel_signals;
create policy "public can submit pending fuel signals"
on public.fuel_signals
for insert
to anon
with check (status = 'pending');

drop policy if exists "public can read approved fuel signals" on public.fuel_signals;
create policy "public can read approved fuel signals"
on public.fuel_signals
for select
to anon
using (status = 'approved');

drop policy if exists "moderators can read all fuel signals" on public.fuel_signals;
create policy "moderators can read all fuel signals"
on public.fuel_signals
for select
to authenticated
using (public.is_fuel_map_moderator());

drop policy if exists "moderators can update fuel signals" on public.fuel_signals;
create policy "moderators can update fuel signals"
on public.fuel_signals
for update
to authenticated
using (public.is_fuel_map_moderator())
with check (public.is_fuel_map_moderator());

select
  public.is_fuel_map_moderator() as current_user_is_moderator,
  policyname,
  roles,
  cmd
from pg_policies
where schemaname = 'public'
  and tablename in ('fuel_signals', 'moderator_allowlist')
order by tablename, policyname;

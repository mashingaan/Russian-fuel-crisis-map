-- Repair public submit/read policies for the production map.
-- Run once in Supabase SQL Editor if public signal upload returns:
-- "new row violates row-level security policy for table fuel_signals".

alter table public.fuel_signals enable row level security;

grant usage on schema public to anon;
grant select, insert on public.fuel_signals to anon;

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

select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename = 'fuel_signals'
order by policyname;

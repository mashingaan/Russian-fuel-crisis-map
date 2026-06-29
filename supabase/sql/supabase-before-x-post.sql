-- 1) Persist problem classification on submitted signals.
alter table public.fuel_signals
add column if not exists issue_type text not null default 'unconfirmed_anomaly';

alter table public.fuel_signals
drop constraint if exists fuel_signals_issue_type_check;

alter table public.fuel_signals
add constraint fuel_signals_issue_type_check
check (issue_type in (
  'no_gasoline',
  'no_diesel',
  'long_queues',
  'purchase_limits',
  'price_spike',
  'station_closure',
  'regional_rationing',
  'infrastructure_damage',
  'unconfirmed_anomaly'
));

create index if not exists fuel_signals_issue_type_idx
on public.fuel_signals (issue_type);

-- 2) Create public storage bucket for submitted videos.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'signal-videos',
  'signal-videos',
  true,
  52428800,
  array['video/mp4', 'video/webm', 'video/quicktime']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public can upload pending signal videos" on storage.objects;
create policy "public can upload pending signal videos"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'signal-videos'
  and (storage.foldername(name))[1] = 'pending'
);

drop policy if exists "public can read signal videos" on storage.objects;
create policy "public can read signal videos"
on storage.objects
for select
to anon
using (bucket_id = 'signal-videos');

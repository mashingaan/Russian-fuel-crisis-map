-- Crimea / Kerch Strait energy infrastructure signal.
-- User-provided Telegram screenshot, 2026-06-29 07:37 MSK.
-- Public map point is deliberately rounded; do not expose the exact coordinate from the post.

-- Repair public submit/read policies first. This keeps the X-public workflow live:
-- users submit pending signals, the moderator approves selected rows.
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

do $$
begin
  if exists (
    select 1
    from public.fuel_signals
    where title = 'Crimea power substations and Kuban energy bridge disruption report'
  ) then
    update public.fuel_signals
    set
      observed_at = date '2026-06-29',
      type = 'infrastructure',
      severity = 'critical',
      status = 'approved',
      region = 'Crimea / Kerch Strait',
      place = 'Kerch / Taman energy bridge area, rounded',
      lat = 45.40,
      lng = 36.80,
      note = 'Telegram report from Supernova+: claims several substations and the Kuban power bridge connection from the Taman side were disrupted overnight; air defense reportedly active in Kerch. Exact source coordinate withheld; public map point rounded. Treat as unconfirmed infrastructure damage until object/video confirmation.',
      fuel = 'Power infrastructure',
      media_url = 'https://t.me/supernova_plus',
      confidence = 'Verified by moderator: Telegram screenshot/source reviewed; exact coordinate withheld; damage claim unconfirmed.',
      loss_weight = 8,
      reviewer_note = 'Approved as Crimea/Kerch Strait energy infrastructure disruption signal from Telegram screenshot, 2026-06-29 07:37 MSK. Public coordinates rounded.'
    where title = 'Crimea power substations and Kuban energy bridge disruption report';
  else
    insert into public.fuel_signals (
      observed_at,
      type,
      severity,
      status,
      title,
      region,
      place,
      lat,
      lng,
      note,
      fuel,
      media_url,
      confidence,
      loss_weight,
      reviewer_note
    )
    values (
      date '2026-06-29',
      'infrastructure',
      'critical',
      'approved',
      'Crimea power substations and Kuban energy bridge disruption report',
      'Crimea / Kerch Strait',
      'Kerch / Taman energy bridge area, rounded',
      45.40,
      36.80,
      'Telegram report from Supernova+: claims several substations and the Kuban power bridge connection from the Taman side were disrupted overnight; air defense reportedly active in Kerch. Exact source coordinate withheld; public map point rounded. Treat as unconfirmed infrastructure damage until object/video confirmation.',
      'Power infrastructure',
      'https://t.me/supernova_plus',
      'Verified by moderator: Telegram screenshot/source reviewed; exact coordinate withheld; damage claim unconfirmed.',
      8,
      'Approved as Crimea/Kerch Strait energy infrastructure disruption signal from Telegram screenshot, 2026-06-29 07:37 MSK. Public coordinates rounded.'
    );
  end if;
end $$;

select id, observed_at, status, title, region, place, lat, lng, media_url
from public.fuel_signals
where title = 'Crimea power substations and Kuban energy bridge disruption report';

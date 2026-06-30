-- Slavyansk-on-Kuban refinery still-burning smoke plume signal
-- Source: X post by bayraktar_1love, 2026-06-30 13:52
-- Public map point is rounded to Slavyansk-on-Kuban

insert into public.fuel_signals (
  observed_at,
  type,
  severity,
  status,
  issue_type,
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
select
  date '2026-06-30',
  'infrastructure',
  'critical',
  'approved',
  'infrastructure_damage',
  'Slavyansk-on-Kuban: refinery smoke plume still visible',
  'Krasnodar Krai',
  'Slavyansk-on-Kuban, rounded',
  45.25,
  38.12,
  'X image report: large smoke plume still visible from Slavyansk-on-Kuban after the refinery fire, indicating continued burning or aftermath on June 30. Public coordinate rounded to the city area.',
  'Refinery fire / smoke plume',
  'https://x.com/bayraktar_1love/status/2071909622806437921',
  'Medium: public X image source, city-level incident context.',
  6,
  'Approved as follow-up evidence for Slavyansk-on-Kuban refinery fire from bayraktar_1love X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Slavyansk-on-Kuban: refinery smoke plume still visible'
)

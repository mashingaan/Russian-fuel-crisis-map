-- Anapa fuel station queue signal
-- Source: X post by Maks_NAFO_FELLA, 2026-06-30 14:49
-- Public map point is rounded to the Anapa city area

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
  'station',
  'serious',
  'approved',
  'long_queues',
  'Anapa: long fuel station queue reported',
  'Krasnodar Krai',
  'Anapa city area, rounded',
  44.90,
  37.32,
  'X video report: long queue at a fuel station in Anapa, Russia. Public coordinate rounded to the city area because the exact station location is not independently verified.',
  'Gasoline queue, product unspecified',
  'https://x.com/Maks_NAFO_FELLA/status/2071924113350791303',
  'Medium: public X video source, city-level location only.',
  4,
  'Approved as Anapa fuel station queue signal from Maks_NAFO_FELLA X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Anapa: long fuel station queue reported'
)

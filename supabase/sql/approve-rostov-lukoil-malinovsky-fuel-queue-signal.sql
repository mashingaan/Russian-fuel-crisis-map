-- Rostov-on-Don Lukoil Malinovsky fuel queue signal
-- Source: X post by LXSummer1, 2026-06-30 00:53
-- Public map point is rounded to the Malinovsky area

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
  'Rostov-on-Don: long queue at Lukoil on Malinovsky',
  'Rostov Oblast',
  'Rostov-on-Don, Malinovsky area, rounded',
  47.23,
  39.61,
  'X video report: evening long queue at a Lukoil station on Malinovsky, described as one of the few still open while many other stations have run out of fuel or closed. Public coordinate rounded to the street area.',
  'Gasoline queue / station closures nearby',
  'https://x.com/LXSummer1/status/2071713778950082789',
  'Medium: public X video source, point rounded to Malinovsky area.',
  5,
  'Approved as Rostov-on-Don fuel queue signal from LXSummer1 X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Rostov-on-Don: long queue at Lukoil on Malinovsky'
)

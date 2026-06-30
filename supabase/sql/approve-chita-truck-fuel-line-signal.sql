-- Chita truck fuel queue signal
-- Source: X post by Gerashchenko_en, 2026-06-29 22:35
-- Public map point is rounded to the Chita city area

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
  date '2026-06-29',
  'station',
  'serious',
  'approved',
  'long_queues',
  'Chita: huge truck line for fuel reported',
  'Zabaykalsky Krai',
  'Chita city area, rounded',
  52.03,
  113.41,
  'X video report shows a huge line of trucks waiting to get fuel in Chita, indicating fuel access stress and possible logistics disruption. Public coordinate rounded to the city area.',
  'Truck fuel queue, product unspecified',
  'https://x.com/Gerashchenko_en/status/2071679019393888326',
  'Medium: public X video source, city-level location only.',
  4,
  'Approved as Zabaykalsky Krai truck fuel queue signal from Gerashchenko_en X post, 2026-06-29. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Chita: huge truck line for fuel reported'
)

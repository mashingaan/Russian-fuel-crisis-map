-- Yalta gasoline price spike signal
-- Source: X post by Maks_NAFO_FELLA, 2026-06-30 16:16
-- Public map point is rounded to the Yalta city area

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
  'critical',
  'approved',
  'price_spike',
  'Yalta: gasoline reportedly sold for 1,000 RUB/L',
  'Crimea',
  'Yalta city area, rounded',
  44.50,
  34.17,
  'X video report: occupied Yalta is reportedly breaking fuel price records, with gasoline sold for 1,000 rubles per liter. Public coordinate rounded to the city area because the exact station location is not independently verified.',
  'Gasoline price spike',
  'https://x.com/Maks_NAFO_FELLA/status/2071945877220921636',
  'Medium: public X video source, city-level location only.',
  8,
  'Approved as Yalta gasoline price spike signal from Maks_NAFO_FELLA X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Yalta: gasoline reportedly sold for 1,000 RUB/L'
)

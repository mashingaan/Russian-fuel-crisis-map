-- Crimea / Poshtove railway traction substation signal
-- Source: X post by OSINTtechnical, 2026-06-30 07:26
-- Public map point is rounded to the Poshtove station area

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
  'Crimea: Poshtove railway traction substation hit',
  'Crimea',
  'Poshtove railway station area, rounded',
  44.83,
  33.96,
  'X report: Ukrainian attack drones reportedly hit the traction substation powering part of the Sevastopol-Simferopol railway overnight, setting it ablaze and knocking it offline. Public coordinate rounded to the Poshtove station area.',
  'Railway power / electric traction substation',
  'https://x.com/Osinttechnical/status/2071812706026270833',
  'Medium: public X report with attached satellite context, public point rounded to the Poshtove area.',
  7,
  'Approved as occupied Crimea railway power infrastructure signal from OSINTtechnical X post, 2026-06-30. Public coordinates rounded.'
where not exists (
  select 1
  from public.fuel_signals
  where title = 'Crimea: Poshtove railway traction substation hit'
)

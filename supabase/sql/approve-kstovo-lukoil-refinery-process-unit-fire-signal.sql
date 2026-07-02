-- Kstovo Lukoil refinery process-unit fire evidence pack
-- Sources: X / Osinttechnical, X / JayinKyiv, user-provided smoke image, 2026-07-02
-- Public map point is rounded to the Kstovo refinery area

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
  source_url,
  media_url,
  confidence,
  loss_weight,
  reviewer_note
)
select
  v.observed_at,
  v.type,
  v.severity,
  v.status,
  v.issue_type,
  v.title,
  v.region,
  v.place,
  v.lat,
  v.lng,
  v.note,
  v.fuel,
  v.source_url,
  v.media_url,
  v.confidence,
  v.loss_weight,
  v.reviewer_note
from (
  values
    (
      date '2026-07-02',
      'infrastructure',
      'critical',
      'approved',
      'infrastructure_damage',
      'Kstovo: Lukoil refinery process unit fire reported',
      'Nizhny Novgorod Oblast',
      'Kstovo refinery area, rounded',
      56.13,
      44.18,
      'X video report says Ukrainian attack drones hit Russia''s Kstovo oil refinery, setting a process unit ablaze. The refinery location is corroborated by open sources, but exact process-unit damage and outage duration need further confirmation.',
      'Oil refinery process unit fire',
      'https://x.com/Osinttechnical/status/2072529990575329411',
      'media/kstovo-lukoil-refinery-process-unit-fire-osinttechnical-2072529990575329411.mp4',
      'Medium: public X video source, refinery location confirmed from open sources, damage extent needs further confirmation.',
      8,
      'Approved as Kstovo Lukoil refinery process-unit fire signal from Osinttechnical X video, 2026-07-02. Public coordinates rounded.'
    ),
    (
      date '2026-07-02',
      'infrastructure',
      'critical',
      'approved',
      'infrastructure_damage',
      'Kstovo: AVT-6 unit reportedly taken offline',
      'Nizhny Novgorod Oblast',
      'Kstovo refinery area, rounded',
      56.13,
      44.18,
      'X image analysis claims the struck facility was the AVT-6 unit, taking 190,000 barrels per day offline, about 53% of the plant processing capacity. Treat capacity-loss figure as medium confidence until corroborated by plant or industry reporting.',
      'AVT-6 primary processing unit / claimed capacity offline',
      'https://x.com/JayinKyiv/status/2072548832533963213',
      'media/kstovo-avt6-unit-190kbpd-capacity-jayinkyiv-2072548832533963213.jpg',
      'Medium: public X image analysis, capacity claim needs corroboration from plant or industry reporting.',
      9,
      'Approved as Kstovo AVT-6 claimed capacity-loss evidence from JayinKyiv X image, 2026-07-02. Public coordinates rounded.'
    ),
    (
      date '2026-07-02',
      'infrastructure',
      'serious',
      'approved',
      'infrastructure_damage',
      'Kstovo: smoke plume photo linked to refinery strike',
      'Nizhny Novgorod Oblast',
      'Kstovo refinery area, rounded',
      56.13,
      44.18,
      'User-provided image shows a smoke plume reportedly connected to the Kstovo refinery strike area. Treat as supporting visual evidence only, because exact viewpoint and timestamp need confirmation.',
      'Refinery smoke plume / visual evidence',
      null,
      'media/kstovo-smoke-plume-supernova-2026-07-02.jpg',
      'Low to medium: user-provided image, visible smoke but exact viewpoint and timestamp need confirmation.',
      3,
      'Approved as supporting Kstovo smoke-plume image from user-provided media, 2026-07-02. Public coordinates rounded.'
    )
) as v(
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
  source_url,
  media_url,
  confidence,
  loss_weight,
  reviewer_note
)
where not exists (
  select 1
  from public.fuel_signals existing
  where existing.title = v.title
)

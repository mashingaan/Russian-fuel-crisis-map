-- Repair corrupted approved public rows.
-- Scope is locked to exact row ids observed in production on 2026-06-29.
-- This restores the real signal locations and rejects the bad duplicate.

-- Slavyansk-on-Kuban refinery fire.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-28',
  title = 'Slavyansk-on-Kuban refinery fire, multiple fires reported',
  region = 'Krasnodar Krai',
  place = 'Slavyansk-on-Kuban, rounded',
  lat = 45.25,
  lng = 38.12,
  type = 'infrastructure',
  severity = 'critical',
  note = 'X video report: burning refinery in Slavyansk-on-Kuban, Krasnodar region, with several independent fires reported, including silo farm area. Public point is rounded.',
  fuel = 'Refinery',
  media_url = 'https://x.com/Tendar/status/2071293970357895340',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as Slavyansk-on-Kuban refinery fire.'
where id = '10bee310-1b41-46fa-9f0d-e8dcadc590ae';

-- Taganrog fuel access anomaly.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-29',
  title = 'Taganrog fuel access anomaly at gas station',
  region = 'Rostov Oblast',
  place = 'Taganrog, rounded',
  lat = 47.20,
  lng = 38.90,
  type = 'station',
  severity = 'watch',
  note = 'X report: fuel was reportedly available but not for everyone; regular drivers were not served while selected vehicles and jerrycans were reportedly refueled. Treat as an unconfirmed fuel-access anomaly.',
  fuel = 'Gasoline, availability disputed',
  media_url = 'https://x.com/LXSummer1/status/2071338652337307974',
  confidence = 'Verified by moderator: public X video/source; anomaly details still source-dependent.',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as Taganrog signal.'
where id = '5b88a21f-46a0-480e-aa38-6a3827eb7dae';

-- Novorossiysk gasoline queue.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-28',
  title = 'Novorossiysk gasoline queue',
  region = 'Krasnodar Krai',
  place = 'Novorossiysk, rounded',
  lat = 44.70,
  lng = 37.80,
  type = 'station',
  severity = 'serious',
  note = 'X video report: queue for gasoline in Novorossiysk, Russia. Public point is rounded.',
  fuel = 'Gasoline',
  media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as Novorossiysk queue signal.'
where id = '59af680f-c11e-4589-b5f2-e2f57b6a5cdd';

-- Surgut gasoline availability problem. Keep only this Surgut row approved.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-28',
  title = 'Surgut gasoline availability problem',
  region = 'Khanty-Mansi Autonomous Okrug',
  place = 'Surgut, rounded',
  lat = 61.30,
  lng = 73.40,
  type = 'station',
  severity = 'watch',
  note = 'X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline is reportedly already a problem even there. Treat as gasoline availability anomaly until exact fuel type and station status are verified.',
  fuel = 'Gasoline, availability problem reported',
  media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as the only public Surgut signal for this source.'
where id = '5b542034-9a2f-4c94-ae1c-af8174b4555c';

-- Reject the bad duplicate that previously appeared as Oryol / duplicate Surgut.
update public.fuel_signals
set
  status = 'rejected',
  title = 'Rejected duplicate: Oryol misclassification of Surgut source',
  region = 'Rejected duplicate',
  place = 'Rejected duplicate',
  lat = 61.30,
  lng = 73.40,
  type = 'station',
  severity = 'watch',
  note = 'Rejected duplicate. User did not submit an Oryol signal for this source; the source signal is Surgut only.',
  fuel = 'Gasoline, duplicate rejected',
  media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786',
  confidence = 'Rejected by moderator',
  reviewer_note = 'Rejected after repair: misclassified Oryol / duplicate Surgut row.'
where id = '30f3fdd4-5809-41ba-be84-62f7ce0f2545';

-- Yaroslavl / YANOS refinery-area anomaly.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-28',
  title = 'Yaroslavl YANOS refinery-area explosion reports',
  region = 'Yaroslavl Oblast',
  place = 'Yaroslavl, YANOS refinery area, rounded',
  lat = 57.60,
  lng = 39.90,
  type = 'infrastructure',
  severity = 'watch',
  note = 'Telegram screenshot/source: reports explosion or incident around the YANOS refinery area in Yaroslavl on 2026-06-28. Damage remains unverified.',
  fuel = 'Refinery-area report, damage unverified',
  media_url = null,
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed; damage unverified.',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as Yaroslavl/YANOS anomaly.'
where id = 'd14e81be-a610-4d74-8cb0-8728a17c6e5f';

-- Occupied Kherson Oblast blackout.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-29',
  title = 'Occupied Kherson Oblast full or partial blackout report',
  region = 'Occupied Kherson Oblast',
  place = 'Kherson Oblast, rounded',
  lat = 46.60,
  lng = 33.00,
  type = 'region',
  severity = 'serious',
  note = 'Telegram screenshot/source: Saldo claimed all or part of Kherson Oblast was without power; energy and emergency services were reportedly working. Regional infrastructure disruption, not fuel-specific.',
  fuel = 'Power infrastructure / electricity',
  media_url = null,
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed.',
  reviewer_note = 'Repaired after accidental Sevastopol field overwrite; approved as occupied Kherson Oblast blackout signal.'
where id = '7e7715bf-fb9c-4cb4-a731-00727c8807e9';

-- Keep the actual Sevastopol logistics signal as the only Sevastopol affected-destination row.
update public.fuel_signals
set
  status = 'approved',
  observed_at = date '2026-06-29',
  title = 'Sevastopol parcel delivery disruption report',
  region = 'Sevastopol / Crimea',
  place = 'Destination: Sevastopol; source location unknown',
  lat = 44.60,
  lng = 33.53,
  type = 'region',
  severity = 'watch',
  note = 'User-submitted report: parcels to Sevastopol are not arriving. Approved only as an affected-destination logistics disruption; source/origin location remains unknown.',
  fuel = 'Not fuel-specific',
  media_url = null,
  confidence = 'Verified by moderator: user-submitted local video/context; source location unknown.',
  reviewer_note = 'Approved as affected-destination logistics anomaly; not an exact incident-location point.'
where id = 'eb593506-4b17-45bd-8036-78bf9d7861b6';

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where id in (
  '10bee310-1b41-46fa-9f0d-e8dcadc590ae',
  '5b88a21f-46a0-480e-aa38-6a3827eb7dae',
  '59af680f-c11e-4589-b5f2-e2f57b6a5cdd',
  '5b542034-9a2f-4c94-ae1c-af8174b4555c',
  '30f3fdd4-5809-41ba-be84-62f7ce0f2545',
  'd14e81be-a610-4d74-8cb0-8728a17c6e5f',
  '7e7715bf-fb9c-4cb4-a731-00727c8807e9',
  'eb593506-4b17-45bd-8036-78bf9d7861b6'
)
order by created_at asc;

-- Recent pending signals
select id, created_at, observed_at, type, severity, title, region, place, media_url
from public.fuel_signals
where status = 'pending'
order by observed_at desc, created_at desc;

-- Approve the Slavyansk-on-Kuban refinery video signal from Tendar
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved from Tendar X video, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Tendar/status/2071293970357895340';

-- After running supabase-issue-type-migration.sql, you can classify approved rows:
-- update public.fuel_signals
-- set issue_type = 'infrastructure_damage'
-- where media_url = 'https://x.com/Tendar/status/2071293970357895340';

-- Approve the Taganrog fuel-access anomaly signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as an unusual fuel-access anomaly in Taganrog, 2026-06-29.'
where status = 'pending'
  and media_url = 'https://x.com/LXSummer1/status/2071338652337307974';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where media_url = 'https://x.com/LXSummer1/status/2071338652337307974';

-- Approve the Novorossiysk gasoline queue signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline queue signal in Novorossiysk, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'long_queues'
-- where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812';

-- Approve the Surgut gasoline availability signal
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as a gasoline availability problem in Surgut, 2026-06-28.'
where status = 'pending'
  and media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and title = 'Surgut gasoline availability problem';

-- After running supabase-issue-type-migration.sql, classify them as:
-- update public.fuel_signals
-- set issue_type = 'no_gasoline'
-- where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
--   and title = 'Surgut gasoline availability problem';

-- Sevastopol CDEK parcel delivery disruption signal:
-- Do not approve as an exact map point until the source/origin location is verified.
-- If approved later, label it as an affected destination, not exact incident location.
-- update public.fuel_signals
-- set
--   status = 'approved',
--   confidence = 'Verified by moderator: user-submitted local video',
--   reviewer_note = 'Approved as affected-destination logistics anomaly; source/origin location unknown.'
-- where status = 'pending'
--   and title = 'Sevastopol parcel delivery disruption report';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Sevastopol parcel delivery disruption report';

-- Approve the Yaroslavl / YANOS refinery-area anomaly signal
-- Keep as unconfirmed unless damage is verified by source/video.
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed',
  reviewer_note = 'Approved as refinery-area anomaly near YANOS, 2026-06-28; damage unverified.'
where status = 'pending'
  and title = 'Yaroslavl YANOS refinery-area explosion reports';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Yaroslavl YANOS refinery-area explosion reports';

-- Approve the occupied Kherson Oblast blackout signal
-- Energy/infrastructure disruption, not fuel-specific.
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: Telegram screenshot/source reviewed',
  reviewer_note = 'Approved as occupied Kherson Oblast regional blackout signal, 2026-06-29.'
where status = 'pending'
  and title = 'Occupied Kherson Oblast full or partial blackout report';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Occupied Kherson Oblast full or partial blackout report';

-- Reject a signal by id
-- update public.fuel_signals
-- set status = 'rejected', reviewer_note = 'Rejected after moderator review.'
-- where id = 'PASTE_SIGNAL_ID_HERE';

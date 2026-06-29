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

-- Approve the Sevastopol CDEK parcel delivery disruption signal
-- This is adjacent logistics stress, not a direct fuel-shortage signal.
update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: user-submitted local video',
  reviewer_note = 'Approved as a regional logistics anomaly in Sevastopol, 2026-06-29.'
where status = 'pending'
  and title = 'Sevastopol parcel delivery disruption report';

-- After running supabase-issue-type-migration.sql, classify it as:
-- update public.fuel_signals
-- set issue_type = 'unconfirmed_anomaly'
-- where title = 'Sevastopol parcel delivery disruption report';

-- Reject a signal by id
-- update public.fuel_signals
-- set status = 'rejected', reviewer_note = 'Rejected after moderator review.'
-- where id = 'PASTE_SIGNAL_ID_HERE';

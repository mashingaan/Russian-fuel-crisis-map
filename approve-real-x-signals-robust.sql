-- Robust approval for real X signals collected for the launch.
-- Does not approve TEST rows.

update public.fuel_signals
set
  status = 'approved',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = coalesce(reviewer_note, 'Approved for public map from launch X signal batch.')
where coalesce(title, '') not ilike 'TEST%'
  and media_url in (
    'https://x.com/Tendar/status/2071293970357895340',
    'https://x.com/LXSummer1/status/2071338652337307974',
    'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812'
  );

-- The 2071088282708889786 source is a Surgut signal. Reject any older
-- Oryol-labeled row instead of turning it into a duplicate.
update public.fuel_signals
set
  status = 'rejected',
  reviewer_note = 'Rejected: user did not submit an Oryol signal for this source. Source signal is Surgut only.'
where media_url = 'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
  and (
    title ilike '%Oryol%'
    or region = 'Oryol Oblast'
    or place ilike '%Oryol%'
  );

-- Restore the single valid Surgut row if it exists.
update public.fuel_signals
set
  status = 'approved',
  title = 'Surgut gasoline availability problem',
  region = 'Khanty-Mansi Autonomous Okrug',
  place = 'Surgut, rounded',
  lat = 61.3,
  lng = 73.4,
  note = 'X video report: Surgut, Khanty-Mansi Autonomous Okrug. Gasoline is reportedly already a problem even there. Treat as gasoline availability anomaly until moderator verifies exact fuel type and station status.',
  fuel = 'Gasoline, availability problem reported',
  confidence = 'Verified by moderator: public X video source',
  reviewer_note = 'Approved as the only public Surgut signal for this source. Misclassified Oryol duplicate rejected.'
where id = '5b542034-9a2f-4c94-ae1c-af8174b4555c';

select status, count(*) as count
from public.fuel_signals
group by status
order by status;

select id, observed_at, status, title, region, place, media_url
from public.fuel_signals
where media_url in (
  'https://x.com/Tendar/status/2071293970357895340',
  'https://x.com/LXSummer1/status/2071338652337307974',
  'https://x.com/Maks_NAFO_FELLA/status/2071279694243143812',
  'https://x.com/Maks_NAFO_FELLA/status/2071088282708889786'
)
order by observed_at desc, created_at desc;

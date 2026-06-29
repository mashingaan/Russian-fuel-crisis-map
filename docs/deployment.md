# Russia Fuel Stress Map, Public Submissions

The app works as a static site. By default, submissions are local-only demo data.

## Public mode

1. Create a Supabase project.
2. Run `supabase/sql/supabase-schema.sql` in the Supabase SQL editor.
3. Copy `config.example.js` to `config.js`.
4. Fill `supabaseUrl` and `supabaseAnonKey`.
5. Deploy the folder to any static host.

## Video upload

Run `supabase/sql/supabase-video-storage.sql` to create a public `signal-videos` bucket for moderated user submissions.

After that, set:

```js
videoUploadEnabled: true
```

Direct `.mp4`, `.webm`, and `.mov` media URLs render inside map popups. X links remain external links.

Public users can insert `pending` signals. Anonymous users can only read `approved` rows. Approve rows in Supabase before they appear on the public map.

## Moderation flow

People submit:

- coordinates
- type
- description
- region/city
- media URL
- signal date
- problem type

Rows arrive with `status = pending`. Review the video and place, then set `status = approved`. Rejected rows should stay `rejected`.

The map sorts approved public signals by `observed_at` first, then by `created_at`.

Problem types:

- `no_gasoline`
- `no_diesel`
- `long_queues`
- `purchase_limits`
- `price_spike`
- `station_closure`
- `regional_rationing`
- `infrastructure_damage`
- `unconfirmed_anomaly`

## What to send to Codex

After creating Supabase, send:

- Project URL
- anon public key

Do not send the service role key for the public frontend.

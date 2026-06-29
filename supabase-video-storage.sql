insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'signal-videos',
  'signal-videos',
  true,
  52428800,
  array['video/mp4', 'video/webm', 'video/quicktime']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "public can upload pending signal videos" on storage.objects;
create policy "public can upload pending signal videos"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'signal-videos'
  and (storage.foldername(name))[1] = 'pending'
);

drop policy if exists "public can read signal videos" on storage.objects;
create policy "public can read signal videos"
on storage.objects
for select
to anon
using (bucket_id = 'signal-videos');

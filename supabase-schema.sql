create table if not exists results (
  id text primary key,
  name text,
  scores jsonb not null,
  created_at timestamptz not null default now()
);

alter table results enable row level security;

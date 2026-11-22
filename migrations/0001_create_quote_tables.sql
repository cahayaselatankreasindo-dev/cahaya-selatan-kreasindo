-- CSK quote intake schema
-- Applied to Cloudflare D1 production and preview databases on 2026-11-23.

CREATE TABLE IF NOT EXISTS quote_requests (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','quoted','won','lost','archived')),
  contact_name TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT,
  company TEXT,
  product_slug TEXT,
  product_name TEXT NOT NULL,
  service_name TEXT,
  size TEXT,
  quantity TEXT,
  material TEXT,
  finishing TEXT,
  location TEXT,
  deadline TEXT,
  notes TEXT,
  reference_name TEXT,
  reference_mime TEXT,
  reference_key TEXT,
  reference_size INTEGER,
  source_url TEXT,
  source_ip_hash TEXT,
  consent_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status_created ON quote_requests(status, created_at DESC);

CREATE TABLE IF NOT EXISTS quote_status_history (
  id TEXT PRIMARY KEY,
  quote_id TEXT NOT NULL,
  from_status TEXT,
  to_status TEXT NOT NULL,
  changed_by TEXT NOT NULL DEFAULT 'admin',
  note TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quote_id) REFERENCES quote_requests(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_quote_status_history_quote ON quote_status_history(quote_id, created_at DESC);

CREATE TABLE IF NOT EXISTS quote_rate_limits (
  ip_hash TEXT NOT NULL,
  window_day TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (ip_hash, window_day)
);

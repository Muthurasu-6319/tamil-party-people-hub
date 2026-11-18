CREATE TABLE public.memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  mobile text NOT NULL,
  email text,
  state text NOT NULL,
  district text NOT NULL,
  constituency text,
  address text NOT NULL,
  organization_wing text NOT NULL,
  age integer,
  consent boolean NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT memberships_name_length CHECK (char_length(full_name) BETWEEN 2 AND 120),
  CONSTRAINT memberships_mobile_format CHECK (mobile ~ '^[6-9][0-9]{9}$'),
  CONSTRAINT memberships_email_length CHECK (email IS NULL OR char_length(email) <= 254),
  CONSTRAINT memberships_age_range CHECK (age IS NULL OR age BETWEEN 18 AND 120),
  CONSTRAINT memberships_pending_only CHECK (status = 'pending'),
  CONSTRAINT memberships_consent_required CHECK (consent = true)
);
GRANT INSERT ON public.memberships TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.memberships TO service_role;
ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit pending membership applications" ON public.memberships FOR INSERT TO anon, authenticated WITH CHECK (status = 'pending' AND consent = true);

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT contact_name_length CHECK (char_length(full_name) BETWEEN 2 AND 120),
  CONSTRAINT contact_email_length CHECK (char_length(email) BETWEEN 3 AND 254),
  CONSTRAINT contact_subject_length CHECK (char_length(subject) BETWEEN 2 AND 160),
  CONSTRAINT contact_message_length CHECK (char_length(message) BETWEEN 5 AND 5000)
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may submit contact enquiries" ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
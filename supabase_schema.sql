-- ==========================================
-- 1. TABLE CREATION & SECURITY POLICIES
-- ==========================================

-- Drop existing tables if you are resetting the database
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.packages CASCADE;
DROP TABLE IF EXISTS public.contact_submissions CASCADE;

-- Create the `services` table
CREATE TABLE public.services (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  duration text NOT NULL,
  href text NOT NULL,
  order_index integer DEFAULT 0
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT TO public USING (true);
CREATE POLICY "Allow write access to services" ON public.services FOR ALL USING (true) WITH CHECK (true);

-- Create the `packages` table
CREATE TABLE public.packages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  duration text NOT NULL,
  price text NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL,
  is_popular boolean DEFAULT false,
  order_index integer DEFAULT 0
);

ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to packages" ON public.packages FOR SELECT TO public USING (true);
CREATE POLICY "Allow write access to packages" ON public.packages FOR ALL USING (true) WITH CHECK (true);

-- Create the `contact_submissions` table
CREATE TABLE public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text,
  preferred_date date,
  message text,
  status TEXT DEFAULT 'Pending'
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Security Policies for contact_submissions
CREATE POLICY "Allow public read access" ON public.contact_submissions FOR SELECT USING (true);
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions FOR INSERT TO anon WITH CHECK (auth.role() = 'anon');
CREATE POLICY "Allow authenticated updates" ON public.contact_submissions FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated inserts" ON public.contact_submissions FOR INSERT TO authenticated WITH CHECK (true);

-- ==========================================
-- 2. INSERT INITIAL SEED DATA
-- ==========================================

-- Insert Services (Updated with local /images/ paths)
INSERT INTO public.services (title, description, image, duration, href, order_index) VALUES
(
  'Aroma', 
  'Organic essential oils like lavender, eucalyptus, and chamomile — worked into your muscles with slow, deliberate strokes. Great for winding down after a long week. Pricing: 30 Min (₹1200) | 45 Min (₹1500) | 1 Hour (₹2000) | 90 Min (₹2500)',
  '/images/services/aroma-therapy.jpeg',
  '30 - 90 min',
  '/services/aroma-therapy',
  1
),
(
  'Balinese Therapy',
  'An Indonesian technique that mixes gentle stretching with acupressure and warm aromatherapy oils. Loosens you up without the deep pressure. Pricing: 30 Min (₹1500) | 45 Min (₹1800) | 1 Hour (₹2000) | 90 Min (₹2500)',
  '/images/services/balinese-therapy.jpeg',
  '30 - 90 min',
  '/services/balinese-therapy',
  2
),
(
  'Thai Therapy',
  'Assisted yoga-like stretches, firm acupressure, and rhythmic compressions. You don''t just feel relaxed afterward — you feel taller and looser. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3000) | 90 Min (₹3500)',
  '/images/services/thai-therapy.jpeg',
  '30 - 90 min',
  '/services/thai-therapy',
  3
),
(
  'Deep Tissue',
  'Firm, targeted pressure into your deepest muscle layers. Built for stiff shoulders, tight lower backs, and pain that won''t quit. Pricing: 30 Min (₹2000) | 45 Min (₹2500) | 1 Hour (₹3200) | 90 Min (₹4500)',
  '/images/services/deep-tissue-massage.jpeg',
  '30 - 90 min',
  '/services/deep-tissue-massage',
  4
),
(
  'Swedish Therapy',
  'Long, flowing strokes across your whole body. This is the classic — great for first-timers, stress relief, and anyone who just wants to melt into the table. Pricing: 30 Min (₹1500) | 45 Min (₹2000) | 1 Hour (₹2500) | 90 Min (₹3500)',
  '/images/services/swedish-massage.jpeg',
  '30 - 90 min',
  '/services/swedish-massage',
  5
),
(
  'Tantra',
  'A slow, intentional practice focused on breath and energy. Designed to quiet a racing mind and bring your whole body into a deep state of calm. Pricing: 30 Min (₹1800) | 45 Min (₹2200) | 1 Hour (₹2700) | 90 Min (₹3500)',
  '/images/services/tantra-therapy.jpeg',
  '30 - 90 min',
  '/services/tantra',
  6
),
(
  'Moroccan Bath Massage',
  'An invigorating traditional cleansing ritual featuring exfoliating authentic Moroccan black soap, steam, and a full-body purifying scrub followed by a relaxing hydration massage. Leaves your skin radiant and intensely cleansed. Pricing: 1 Hour (₹3000) | 90 Min (₹4000) | 2 Hours (₹5000)',
  '/images/services/moroccan-bath-massage.jpeg',
  '60 - 120 min',
  '/services/moroccan-bath-massage',
  7
),
(
  'Body Scrubbing Massage',
  'A rejuvenating combination of full-body organic salt and herbal scrub exfoliation followed by a smooth, relaxing oil massage. Refreshes tired skin, removes dullness, and boosts cellular renewal. Pricing: 45 Min (₹2000) | 1 Hour (₹2500) | 90 Min (₹3500)',
  '/images/services/body-scrubbing-massage.jpeg',
  '45 - 90 min',
  '/services/body-scrubbing-massage',
  8
),
(
  'Four Hands Massage',
  'The ultimate relaxation indulgence where two expert therapists work in seamless, choreographed harmony. With four hands gently melting away tension simultaneously, your racing mind totally surrenders to relaxation. Pricing: 1 Hour (₹4500) | 90 Min (₹6000)',
  '/images/services/four-hands-massage.jpeg',
  '60 - 90 min',
  '/services/four-hands-massage',
  9
),
(
  'Hot Stone Massage',
  'Smooth, heated volcanic basalt stones are strategically placed on key energy points and glided across tight muscle bands. The gentle heat penetrates deep into muscle cores to melt persistent rigidity and relieve fatigue. Pricing: 1 Hour (₹2800) | 90 Min (₹3800)',
  '/images/services/hot-stone-massage.jpeg',
  '60 - 90 min',
  '/services/hot-stone-massage',
  10
),
(
  'Couple Massage',
  'Share a serene, binding wellness journey with your partner or loved one in our luxury couple''s spa suite. Tailored treatments side-by-side with tranquil ambient lighting, aromatic scents, and absolute privacy. Pricing: 1 Hour (₹4500 for two) | 90 Min (₹6500 for two)',
  '/images/services/couple-massage.jpeg',
  '60 - 90 min',
  '/services/couple-massage',
  11
),
(
  'Signature Massage',
  'Our crown jewel therapy combining the finest techniques from Thai stretches, Balinese acupressure, Deep Tissue muscle work, and warm Aromatherapy oils into one masterpiece treatment tailored uniquely to your body. Pricing: 1 Hour (₹3500) | 90 Min (₹4500) | 2 Hours (₹5500)',
  '/images/services/signature-massage.jpeg',
  '60 - 120 min',
  '/services/signature-massage',
  12
);

-- Insert Packages
INSERT INTO public.packages (name, duration, price, description, features, is_popular, order_index) VALUES
(
  'Bronze Membership',
  '3 Months',
  '₹10,000/-',
  'Perfect for a short-term commitment to relaxation.',
  ARRAY['6 Sittings', '3 Months Validity'],
  false,
  1
),
(
  'Silver Membership',
  '6 Months',
  '₹15,000/-',
  'Ideal for regular visits over half a year.',
  ARRAY['11 Sittings', '6 Months Validity'],
  false,
  2
),
(
  'Gold Membership',
  '1 Year',
  '₹25,000/-',
  'Our most popular membership tier for a full year of wellness.',
  ARRAY['17 Sittings', '1 Year Validity'],
  true,
  3
),
(
  'Platinum Membership',
  '1.5 Years',
  '₹30,000/-',
  'The ultimate relaxation experience with maximum sittings.',
  ARRAY['22 Sittings', '1 Year 6 Months Validity'],
  false,
  4
);

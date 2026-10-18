-- =========================================================================
-- MARS Wellbeing — Administrator Role Setup & Verification
-- =========================================================================
-- Run this query in your Supabase SQL Editor after you sign up
-- with your administrator email account (e.g., founder@marswellbeing.in).

-- 1. Promote your user account to Administrator:
-- (Replace 'admin@marswellbeing.in' with your real signup email)
UPDATE public.profiles
SET role = 'admin', updated_at = now()
WHERE email = 'admin@marswellbeing.in';

-- 2. Verify admin status:
SELECT id, email, full_name, role, created_at, last_sign_in_at
FROM public.profiles
WHERE role = 'admin';

-- 3. To view all registered users in the database directly:
SELECT id, email, full_name, role, created_at, last_sign_in_at
FROM public.profiles
ORDER BY created_at DESC;

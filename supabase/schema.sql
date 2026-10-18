
-- ============================================================================
-- MARS Wellbeing — Phase 1 Database Schema
-- Target: Supabase PostgreSQL
-- ============================================================================

BEGIN;

-- 1. Required extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. User profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    role TEXT NOT NULL DEFAULT 'user'
        CHECK (role IN ('user', 'admin')),
    avatar_url TEXT,
    last_sign_in_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_role
    ON public.profiles(role);

CREATE INDEX IF NOT EXISTS idx_profiles_created_at
    ON public.profiles(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_profiles_email
    ON public.profiles(email);

-- 3. Early-access waitlist
CREATE TABLE IF NOT EXISTS public.early_access_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT NOT NULL DEFAULT 'Bengaluru',
    interests TEXT[] NOT NULL DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'contacted', 'invited', 'archived')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_early_access_email
    ON public.early_access_leads(email);

CREATE INDEX IF NOT EXISTS idx_early_access_status
    ON public.early_access_leads(status);

CREATE INDEX IF NOT EXISTS idx_early_access_created_at
    ON public.early_access_leads(created_at DESC);

-- 4. Administrator check
-- SECURITY DEFINER lets this function check profiles without recursive RLS.
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $function$
    SELECT EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE id = (SELECT auth.uid())
          AND role = 'admin'
    );
$function$;

REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- 5. Create/synchronize profiles when Supabase Auth creates a user.
-- Never trust signup metadata to assign an administrator role.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
    INSERT INTO public.profiles (
        id,
        email,
        full_name,
        role,
        last_sign_in_at,
        created_at,
        updated_at
    )
    VALUES (
        NEW.id,
        COALESCE(NEW.email, ''),
        COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
        'user',
        NEW.last_sign_in_at,
        now(),
        now()
    )
    ON CONFLICT (id) DO UPDATE
    SET
        email = EXCLUDED.email,
        full_name = COALESCE(
            EXCLUDED.full_name,
            public.profiles.full_name
        ),
        last_sign_in_at = COALESCE(
            EXCLUDED.last_sign_in_at,
            public.profiles.last_sign_in_at
        ),
        updated_at = now();

    RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- 6. Synchronize last-sign-in timestamps.
CREATE OR REPLACE FUNCTION public.handle_user_sign_in()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
    UPDATE public.profiles
    SET
        last_sign_in_at = NEW.last_sign_in_at,
        updated_at = now()
    WHERE id = NEW.id;

    RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS on_auth_user_sign_in ON auth.users;

CREATE TRIGGER on_auth_user_sign_in
    AFTER UPDATE OF last_sign_in_at ON auth.users
    FOR EACH ROW
    WHEN (OLD.last_sign_in_at IS DISTINCT FROM NEW.last_sign_in_at)
    EXECUTE FUNCTION public.handle_user_sign_in();

-- 7. Prevent unauthorized role changes.
-- Ordinary users cannot promote themselves.
-- Trusted database administrators can perform the initial admin setup.
CREATE OR REPLACE FUNCTION public.prevent_profile_role_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = ''
AS $function$
BEGIN
    IF NEW.role IS DISTINCT FROM OLD.role
       AND current_user NOT IN ('postgres', 'supabase_admin', 'service_role')
       AND NOT public.is_admin()
    THEN
        RAISE EXCEPTION 'Only administrators can change profile roles';
    END IF;

    RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS prevent_profile_role_escalation
    ON public.profiles;

CREATE TRIGGER prevent_profile_role_escalation
    BEFORE UPDATE OF role ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.prevent_profile_role_escalation();

-- 8. Enable Row Level Security.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.early_access_leads ENABLE ROW LEVEL SECURITY;

-- Profiles: remove policies with these names before recreating them.
DROP POLICY IF EXISTS "profiles_select_own_or_admin"
    ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own_or_admin"
    ON public.profiles;
DROP POLICY IF EXISTS "profiles_delete_own_or_admin"
    ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own"
    ON public.profiles;

-- Users see only their own profile; admins can see all profiles.
CREATE POLICY "profiles_select_own_or_admin"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (
        id = (SELECT auth.uid())
        OR (SELECT public.is_admin())
    );

-- Users can update their own profile; admins can update any profile.
-- The trigger above separately protects the role column.
CREATE POLICY "profiles_update_own_or_admin"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (
        id = (SELECT auth.uid())
        OR (SELECT public.is_admin())
    )
    WITH CHECK (
        id = (SELECT auth.uid())
        OR (SELECT public.is_admin())
    );

-- Users can delete their own profile; admins can delete any profile.
CREATE POLICY "profiles_delete_own_or_admin"
    ON public.profiles
    FOR DELETE
    TO authenticated
    USING (
        id = (SELECT auth.uid())
        OR (SELECT public.is_admin())
    );

-- Users can insert only their own regular-user profile.
CREATE POLICY "profiles_insert_own"
    ON public.profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (
        id = (SELECT auth.uid())
        AND role = 'user'
    );

-- 9. Early-access lead policies.
DROP POLICY IF EXISTS "early_access_public_insert"
    ON public.early_access_leads;
DROP POLICY IF EXISTS "early_access_admin_select"
    ON public.early_access_leads;
DROP POLICY IF EXISTS "early_access_admin_update"
    ON public.early_access_leads;
DROP POLICY IF EXISTS "early_access_admin_delete"
    ON public.early_access_leads;

-- Visitors may submit a pending lead, but cannot choose its status or notes.
CREATE POLICY "early_access_public_insert"
    ON public.early_access_leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (
        length(trim(full_name)) > 0
        AND length(trim(email)) > 3
        AND status = 'pending'
        AND notes IS NULL
    );

-- Only admins may read leads.
CREATE POLICY "early_access_admin_select"
    ON public.early_access_leads
    FOR SELECT
    TO authenticated
    USING ((SELECT public.is_admin()));

-- Only admins may update leads.
CREATE POLICY "early_access_admin_update"
    ON public.early_access_leads
    FOR UPDATE
    TO authenticated
    USING ((SELECT public.is_admin()))
    WITH CHECK ((SELECT public.is_admin()));

-- Only admins may delete leads.
CREATE POLICY "early_access_admin_delete"
    ON public.early_access_leads
    FOR DELETE
    TO authenticated
    USING ((SELECT public.is_admin()));

-- 10. Secure account self-deletion function.
CREATE OR REPLACE FUNCTION public.delete_user_account()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
    IF (SELECT auth.uid()) IS NULL THEN
        RAISE EXCEPTION 'Authentication is required';
    END IF;

    DELETE FROM auth.users
    WHERE id = (SELECT auth.uid());

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Authenticated user account was not found';
    END IF;
END;
$function$;

REVOKE ALL ON FUNCTION public.delete_user_account() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.delete_user_account() FROM anon;
REVOKE ALL ON FUNCTION public.delete_user_account() FROM authenticated;
GRANT EXECUTE ON FUNCTION public.delete_user_account() TO authenticated;

COMMIT;

-- Add a unique partial index to ensure only ONE super_admin can ever exist
-- This prevents race conditions where multiple admins could be created simultaneously
CREATE UNIQUE INDEX idx_single_super_admin 
ON public.user_roles(role) 
WHERE role = 'super_admin';
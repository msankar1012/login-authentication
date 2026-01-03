// src/supabase/client.js
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL_REPLACED_BY_VITE;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY_REPLACED_BY_VITE;
export const supabase = createClient(supabaseUrl, supabaseKey);

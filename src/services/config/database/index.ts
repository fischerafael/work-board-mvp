import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_URL;
const ANON = process.env.NEXT_PUBLIC_ANON;

const db = createClient(URL!, ANON!);

export { db };

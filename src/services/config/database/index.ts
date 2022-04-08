import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_URL;
const ANON = process.env.NEXT_PUBIC_ANON;
("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ2NjU1MSwiZXhwIjoxOTU5MDQyNTUxfQ.xofLtoLfwnsx8DNPjnZSt7OlFfyXtBJwwNBHquonKts");

const db = createClient(URL!, ANON!);

export { db };

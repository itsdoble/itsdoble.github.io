import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ppjhvbqqsjjmtcigkwmb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDY5MjgwNywiZXhwIjoxOTU2MjY4ODA3fQ.NZ4ClmnjBwwnM_vcxNboCel71dYlpdH_0rOOsAYUEXo";

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pdlhpmysrshhfdpqtzlu.supabase.co'
const supabaseKey = process.env.NEXT_ENV_SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)
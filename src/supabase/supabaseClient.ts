import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eofozmxbubbftllrujzf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvZm96bXhidWJiZnRsbHJ1anpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNjg4MTUsImV4cCI6MjA2NTg0NDgxNX0.uVJZ74L3qDmmGThsypxEa79ogwbHGjGcpqnhAXDrw3c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

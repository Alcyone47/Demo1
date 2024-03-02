// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://swvvgzzinqsawjmzqdhe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dnZnenppbnFzYXdqbXpxZGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDc3MTUsImV4cCI6MjAyNDkyMzcxNX0.crgwM73Ce0J8ok9bqbdsZMRbEnBwT-Gz5cYFZvBV7FQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
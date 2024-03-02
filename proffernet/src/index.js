import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://swvvgzzinqsawjmzqdhe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dnZnenppbnFzYXdqbXpxZGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNDc3MTUsImV4cCI6MjAyNDkyMzcxNX0.crgwM73Ce0J8ok9bqbdsZMRbEnBwT-Gz5cYFZvBV7FQ')

export default function App() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
    })

    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session)
    })

    return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
        return (<div>Logged in!</div>)
    }
}
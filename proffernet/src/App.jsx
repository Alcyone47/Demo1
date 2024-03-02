import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }

  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App

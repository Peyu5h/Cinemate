import { useEffect, useState } from "react"


const useFetch = (apiPath, query="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`;
  
    useEffect(() => {
      async function fetchMovies() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.results);
      }
  
      fetchMovies();
    }, [url]);
  
    return { data };
  };

export default useFetch

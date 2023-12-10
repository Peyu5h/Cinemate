import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch.jsx"
import { useEffect } from "react";
import PropTypes from "prop-types"; 

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const {data: movies} = useFetch(apiPath, query);

  useEffect(() => {
    document.title = `Search result for ${query}`;
  });

  return (
    <main>
      
      <section className="py-7">
      <p className="text-3xl font-sans text-slate-600 dark:text-slate-100/40 lg:ml-28 mt-8 ml-8 font-semibold">{movies.length == 0 ? `No Result found for ${query}` : `Result for ${query}`}</p>
        <div className="flex justify-center items-start flex-wrap">
          {movies.map((movie) => (
            <Card movie={movie}  key={movie.id}/>
          ))}
        </div>
      </section>
    </main>
  );
}

Search.propTypes = {
  apiPath: PropTypes.string.isRequired, 
};

export default Search

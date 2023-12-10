import PropTypes from 'prop-types';
import Card from "../components/Card";
import useFetch from "../hooks/useFetch.jsx"
import { useEffect } from 'react';

const MovieList = ({apiPath, title}) => {

 

  const {data: movies} = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title}`;
  });
  return (
    <main>
      <section className="py-7">
        <div className="flex justify-center items-start flex-wrap">
          {movies.map((movie) => (
            <Card movie={movie}  key={movie.id}/>
          ))}
        </div>
      </section>
    </main>
  );
};

MovieList.propTypes = {
  apiPath: PropTypes.any,
  title: PropTypes.any,

};

export default MovieList;

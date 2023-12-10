import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Backup from "../assets/backup.png"
import PropTypes from "prop-types"; 



const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`;

  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : Backup;

  useEffect(() => {
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
      console.log(json)
    }
    fetchMovies();
 
  },[url]);

  useEffect(() => {
    document.title = `${movie.title}`;
  });
  

  return (
   <>
    <main>
      <section className="flex justify-center">
      <div className="flex justify-center flex-wrap  py-5 lg:space-x-16">
        <div><img src={image} alt={movie.title} className="rounded-md" /></div>
        <div className="Content flex flex-col flex-wrap max-w-2xl m-6 lg:m-0 ">
          <div className="Tiltle&Description flex"></div>
            <h3 className="font-semibold text-center  mt-4 lg:mt-0 lg:text-left text-5xl text-gray-800 dark:text-slate-100 ">{movie.title}</h3>
            <p className="text-md font-normal   mt-4 text-gray-800 dark:text-slate-100 font-sans  ">{movie.overview}</p>

            <div className="mt-7 mb-5 flex flex-wrap gap-2">
              {movie.genres && movie.genres.map((genre) => ( //&& condition cuz movie.genres is initially undefined
                <span  className="mr-2 border border-gray-200 rounded-md text-gray-800 dark:text-slate-100 dark:border-gray-600 p-2 px-4" key={genre.id}>{genre.name}</span>
              ))}            
            </div>

        <div className="my-2">  
          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" className=" text-gray-900   dark:text-white">{`${movie.vote_count} reviews` }</a>
        </div>

        <p className="mt-6 mb-4 text-md text-gray-800 dark:text-slate-100">
          <span className="mr-2 font-bold ">Runtime:</span>
          <span>{movie.runtime} min.</span>
        </p>
        <p className="my-5 text-md text-gray-800 dark:text-slate-100">
          <span className="mr-2 font-bold ">Budget:</span>
          <span>${movie.budget}</span>
        </p>
        <p className="my-5 text-md text-gray-800 dark:text-slate-100">
          <span className="mr-2 font-bold ">Revenue:</span>
          <span>${movie.revenue}</span>
        </p>
        <p className="my-5 text-md text-gray-800 dark:text-slate-100">
          <span className="mr-2 font-bold ">Release Date:</span>
          <span>{movie.release_date}</span>
        </p>
        <p className="my-5 text-md text-gray-800 dark:text-slate-100">
          <span className="mr-2 font-bold ">IMDB Code:</span>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className="hover:underline">{movie.imdb_id}</a>
        </p>

      <div className="my-6">
        <a href={movie.homepage} target="_blank" rel="noreferrer" ><button className="p-3 px-4 text-slate-100 hover:bg-blue-600 transition-all rounded-md bg-blue-500">Watch Now</button></a>
      </div>

        </div>
        </div>
      </div>
    </section>
    </main>
   </>
  )
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
};


export default MovieDetail

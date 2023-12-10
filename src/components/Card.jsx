import { Link } from "react-router-dom"
import Backup from "../assets/backup.png"
import PropTypes from "prop-types"; 


const Card = ({movie}) => {
  const {id, original_title, overview,poster_path} = movie; //destructuring movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  return (
    <div>
     <div className="m-3 h-[110vh] overflow-y-hidden  max-w-sm shadow-lg bg-white border border-gray-200 rounded-xl  dark:bg-gray-800 dark:border-gray-700">
                  <Link to={`/movie/${id}`}>
                      <img className="rounded-t-lg" src={image} alt="" />
                  </Link>
                  <div className="p-5">
                      <Link to={`/movie/${id}`}>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                      </Link>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                      
                  </div>
              </div>
    </div>
  )
}

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card

import { Route, Routes } from "react-router-dom";
import MovieList from "./pages/MovieList.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Search from "./pages/Search.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {

  return (
    <div className="App dark:bg-slate-800">
      <Header/>
      
       <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
            <Route path="movie/:id" element={<MovieDetail/>} />
            <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>} />
            <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>} />
            <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>} />
            <Route path="search" element={<Search apiPath="search/movie"/>} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App

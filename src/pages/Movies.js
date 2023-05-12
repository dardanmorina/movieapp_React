import React, { useEffect, useState} from 'react'
import axios from 'axios';
import MoviesCard from '../components/MoviesCard'
import Pagination from '../components/Pagination';


function Movies() {
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&language=en-US&sort_by=popularity.desc&page=${page}`)
        .then((response) =>  setMovies(response.data.results))
  },[page]);

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&query=${searchTerm}`)
        .then((response) =>  setMovies(response.data.results))
  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className="movie-container">
          <form onSubmit={handleOnSubmit}>
            <input 
                className="search"
                type="search"
                placeholder='Search..'
                value={searchTerm}
                onChange={handleOnChange}
            />
          </form>
          {movies && movies.map(movie => 
            <MoviesCard 
              key={movie.id} 
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />)}
      </div> 
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default Movies; 
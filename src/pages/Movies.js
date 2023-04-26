import React, { useEffect, useState} from 'react'
import MoviesCard from '../components/MoviesCard'
import Pagination from '../components/Pagination';


function Movies() {
  const [ movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&language=en-US&sort_by=popularity.desc&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
            setMovies(data.results);
    });
  },[page]);

  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&query=` + searchTerm)
          .then((res) => res.json())
          .then((data) => {
              setMovies(data.results);
          });
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
            <MoviesCard key={movie.id} {...movie}/>
          )}
      </div> 
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default Movies; 
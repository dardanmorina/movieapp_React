import React, { useEffect, useState} from 'react'
import axios from 'axios';
import MoviesCard from '../components/MoviesCard'

function Home() {
  const [ movies, setMovies ] = useState([]);
  

  useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&language=en-US&page=1')
        .then((response) =>  setMovies(response.data.results))
  },[]);

  return (
    <div className="movie-container">
      <div className="info">
          <h4>This is a home page of MovieApp</h4>
          <p>
            This page shows all movies that are Now Playing, to see all movies go to the Movies page
          </p>
      </div>

      {movies &&  movies.map((movie) => 
        <MoviesCard 
          key={movie.id} 
          title={movie.title}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
          poster_path={movie.poster_path}/>)}
    </div>
  )
}

export default Home
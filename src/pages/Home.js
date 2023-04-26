import React, { useEffect, useState} from 'react'
import MoviesCard from '../components/MoviesCard'
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';

const APIURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=37c10f2658655b7b6ec366bb9cd6a3c0&language=en-US&page=1'
function Home() {
  
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
      fetch(APIURL)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
                setMovies(data.results);
            });
  },[]);

  return (
    <div className="movie-container">
      <Alert variant="success">
          <Alert.Heading>This is a home page of MovieApp</Alert.Heading>
          <p>
            This page shows all movies that are Now Playing, to see all movies go to the Movies page
          </p>
      </Alert>

      {movies.length > 0 &&  movies.map((movie) => 
        <MoviesCard key={movie.id} {...movie}/>)}
    </div>
  )
}

export default Home
import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const MoviesCard = ({ title, poster_path, vote_average, release_date}) =>(
    <Card style={{ width: '17rem' }}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w1280/" + poster_path} />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Vote: {vote_average}</Card.Text>
        <Card.Text>Date: {release_date}</Card.Text>
    </Card.Body>
  </Card>
)

export default MoviesCard;
import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <Card onClick={() => this.props.handleShowcard(movie.id)} >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
          <Card.Text>{`rating: ${movie.vote_average}`}</Card.Text>
          <Card.Text>{`Year: ${movie.release_date}`}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movie;
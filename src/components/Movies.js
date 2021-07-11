import React from 'react';
import { Card } from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`} />
        <Card.Body>
          <Card.Title>{movies.original_title}</Card.Title>
          <Card.Text>{movies.overview}</Card.Text>
          <Card.Text>{`rating: ${movies.vote_average}`}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movies;
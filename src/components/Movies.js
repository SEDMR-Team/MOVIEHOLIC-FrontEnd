import React from 'react';
import { Card } from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <Card>
        <Card.Img variant="top" src={movies.backdrop_path} />
        <Card.Body>
          <Card.Title>{movies.original_title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movies;
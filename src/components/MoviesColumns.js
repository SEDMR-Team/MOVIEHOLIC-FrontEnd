import React from 'react';
import Movies from './Movies.js';
import { Container, CardColumns } from 'react-bootstrap';

class MoviesColumns  extends React.Component {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.movies.map((movies, i) => <Movies key={i} movies={movies} />)}
        </CardColumns>
      </Container>
    )
  }
}

export default MoviesColumns ;
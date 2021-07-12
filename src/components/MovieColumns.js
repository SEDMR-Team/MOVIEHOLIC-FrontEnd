


import React from 'react';
import Movie from './Movie.js';
import { Container, CardColumns } from 'react-bootstrap';

class MovieColumns  extends React.Component {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.movies.map((movie, i) => <Movie key={i} movie={movie} handleShowcard={this.props.handleShowcard} />)}
        </CardColumns>
      </Container>
    )
  }
}

export default MovieColumns ;
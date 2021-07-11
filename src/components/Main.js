import React from 'react';
// import Cards from './Cards';
import MoviesColumns from './MoviesColumns.js';
// import { Container, CardColumns } from 'react-bootstrap';
class Main extends React.Component {
  render() {
    return (
      <>
               <MoviesColumns movies={this.props.movies} />
      </>
    )
  }
}

export default Main;
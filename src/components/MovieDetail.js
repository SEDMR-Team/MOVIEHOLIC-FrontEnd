import React from 'react';
import { Button , Container } from 'react-bootstrap';
import MovieCarousel from './MovieCarousel.js';
import MovieInfo from './MovieInfo';

import './MovieDetail.css'

class MovieDetail extends React.Component {
  render() {
    // const isAuthenticated = this.props.isAuthenticated;
    return (
      <>
        <MovieCarousel movie={this.props.movie} />

       
      <Button id='bi'   variant='dark' onClick={this.props.handleSave}>Add To My Profile</Button>
        <MovieInfo movie={this.props.movie}
        />

      </>
    )
  }
}

export default MovieDetail;
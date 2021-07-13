import React from 'react';
import { Button , Container } from 'react-bootstrap';
import MovieCarousel from './MovieCarousel.js';
import MovieInfo from './MovieInfo';



class MovieDetail extends React.Component {
  render() {
    // const isAuthenticated = this.props.isAuthenticated;
    return (
      <>
        <MovieCarousel movie={this.props.movie} />

       
      <Button className="primary" onClick={this.props.handleSave}>Add To Favorite List</Button>
        <MovieInfo movie={this.props.movie}
        />

      </>
    )
  }
}

export default MovieDetail;
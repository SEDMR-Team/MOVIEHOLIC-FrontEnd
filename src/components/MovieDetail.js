import React from 'react';
import { Button } from 'react-bootstrap';
import MovieCarousel from './MovieCarousel.js';
import MovieInfo from './MovieInfo';

class MovieDetail extends React.Component {
  render() {
    return (
      <>
        <MovieCarousel movie={this.props.movie} />
        <Button className="primary" onClick={this.props.handleSave}>Save</Button>
        <Button className="primary">Rate</Button>
        <MovieInfo movie={this.props.movie}
        />

      </>
    )
  }
}

export default MovieDetail;
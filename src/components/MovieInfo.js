import React from 'react';

class MovieInfo extends React.Component {
  render() {
    const movie = this.props.movie;
    console.log('This is BusinessInfo', movie);
    return (
      <>
        <h1>Hello from movieInfo</h1>
        <p>
          <ul>
            <li>{movie.title}</li>
            
            <li>{movie.overview}</li>
            <li>{movie.status}</li>
            <li>{movie.vote_average}</li>
          </ul>
        </p>
      </>
    )
  }
}

export default MovieInfo;

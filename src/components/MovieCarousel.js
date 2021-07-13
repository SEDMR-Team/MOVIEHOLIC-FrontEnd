import React from 'react';


class MovieCarousel extends React.Component {
  render() {
    const movie= this.props.movie;
    return (

      <>
      <h2 className="MD">Movie Details </h2>
        {movie.poster_path ?
                  <img
                    className="d-flex w-40 imgD"
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt="First slide"height={500}/>        
          :
          ''
        }
      </>
    )
  }
}

export default MovieCarousel;
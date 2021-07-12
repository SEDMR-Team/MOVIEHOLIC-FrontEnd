import React from 'react';
import MovieColumns from './MovieColumns.js';
import MovieCarousel from './MovieCarousel.js'
import SearchBar from './SearchBar';
import MovieDetail from './MovieDetail.js'
class Main extends React.Component {
  render() {
    return (
      <>
       <SearchBar
          handleOnChange={this.props.handleOnChange} 
          handleSubmit={this.props.handleSubmit}
          with_genres={this.props.with_genres}
          primary_release_year={this.props.primary_release_year}
        />

<MovieDetail
          movie={this.props.movie}
        />


               <MovieColumns 
               movies={this.props.movies} 
               handleShowcard={this.props.handleShowcard}
               
               
               />

<MovieCarousel
          movie={this.props.movie}
        />


      </>
    )
  }
}

export default Main;
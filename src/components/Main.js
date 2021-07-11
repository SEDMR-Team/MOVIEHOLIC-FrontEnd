import React from 'react';
// import Cards from './Cards';
import MoviesColumns from './MoviesColumns.js';
// import { Container, CardColumns } from 'react-bootstrap';
import SearchBar from './SearchBar';
class Main extends React.Component {
  render() {
    return (
      <>
        <SearchBar
          handleOnChange={this.props.handleOnChange}
          handleSubmit={this.props.handleSubmit}
          with_genres={this.props.with_genres}
          primary_release_year={this.props.primary_release_year}/>
        <MoviesColumns movies={this.props.movies} />
        {/* <Pagination/> */}
       

      </>
    )
  }
}

export default Main;
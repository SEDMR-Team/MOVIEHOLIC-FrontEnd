import React from 'react';
import { Row } from 'react-bootstrap';
// import Cards from './Cards';
import MoviesColumns from './MoviesColumns.js';
import SlideShow from './SlideShow.js';
// import { Container, CardColumns } from 'react-bootstrap';


class Main extends React.Component {
  render() {
    return (
      <>
               <MoviesColumns movies={this.props.movies} />
               {/* <Pagination/> */}
               <SlideShow/>
              
      </>
    )
  }
}

export default Main;
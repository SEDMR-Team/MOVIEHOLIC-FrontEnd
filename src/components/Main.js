import React from 'react';
// import Cards from './Cards';
import Movies from './Movies';
import { Container, CardColumns } from 'react-bootstrap';
class Main extends React.Component {
  render() {
    return (
      <>
        <h1>This is Main</h1>
        <Container>
          <CardColumns>
            {this.props.movies.map(movies =>
              <Movies movies={movies} />)}
          </CardColumns>
        </Container>
      </>
    )
  }
}

export default Main;
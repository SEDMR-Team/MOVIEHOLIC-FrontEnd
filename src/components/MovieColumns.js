import React from 'react';
import Movie from './Movie.js';
import { Container, CardColumns } from 'react-bootstrap';
import { Button ,ButtonToolbar, ButtonGroup  } from 'react-bootstrap'


class MovieColumns  extends React.Component {
  render() {
    return (
      <>
      <Container>
        <CardColumns>
          {this.props.movies.map((movie, i) => <Movie key={i} movie={movie} handleShowcard={this.props.handleShowcard} />)}
        </CardColumns>
      </Container>
      
      <ButtonToolbar id="ButtonToolbar" aria-label="Toolbar with button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button>5</Button> 
      </ButtonGroup>
    
    </ButtonToolbar>
    </>

    )
  }
}

export default MovieColumns ;
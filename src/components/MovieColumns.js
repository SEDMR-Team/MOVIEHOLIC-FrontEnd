import React from 'react';
import Movie from './Movie.js';
import { Container, CardColumns } from 'react-bootstrap';
import { Button ,ButtonToolbar, ButtonGroup  } from 'react-bootstrap'
import SlideShow from './SlideShow.js'

class MovieColumns  extends React.Component {
  render() {
    return (
      <>
       

      <Container>
      <SlideShow />
        <CardColumns>
          {this.props.movies.map((movie, i) => <Movie key={i} movie={movie} handleShowcard={this.props.handleShowcard} />)}
        </CardColumns>
      </Container>
      
      <ButtonToolbar id="ButtonToolbar" aria-label="Toolbar with button groups">
      {/* <ButtonGroup  onSelect={e => this.props.pageHandler(e)} value={this.props.page} className="mr-2" aria-label="First group">
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button>NEXT</Button> 
      </ButtonGroup> */}
        <Button value='1' onClick={e => this.props.pageHandler(e)}>1</Button> <Button value='2' onClick={e => this.props.pageHandler(e)} >2</Button> <Button value='3'>3</Button> <Button>4</Button>
    
    </ButtonToolbar>
    
    </>

    )
  }
}

export default MovieColumns ;
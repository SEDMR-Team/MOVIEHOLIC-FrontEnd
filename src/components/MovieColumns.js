import React from 'react';
import Movie from './Movie.js';
import { Container, CardColumns } from 'react-bootstrap';
import { Button ,ButtonToolbar, ButtonGroup  } from 'react-bootstrap'
// import SlideShow from './SlideShow.js'

class MovieColumns  extends React.Component {
  handleClick=(e)=>{
console.log(e.target.value);
this.props.handleSubmit(e.target.value)
  }
  render() {
    return (
      <>
       

      <Container>
      {/* <SlideShow /> */}
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
        <Button variant="danger" >1</Button> <Button value='2' variant="danger"  >2</Button> <Button value='3' variant="danger" >3</Button> <Button variant="danger" >Next►►</Button>
    
    </ButtonToolbar>
    
    </>

    )
  }
}

export default MovieColumns ;
import React from 'react';
import { ListGroup } from 'react-bootstrap';
class MovieInfo extends React.Component {
  render() {
    const movie = this.props.movie;
    console.log('This is MovieInfo', movie);
    return (
      <>
   <ListGroup variant="flush" className="mt-3" style={{ textAlign: "left" }}>
       
          
   <ListGroup.Item><b>{movie.title}</b></ListGroup.Item>
   <ListGroup.Item>{movie.overview}</ListGroup.Item>
   <ListGroup.Item>{movie.vote_average}</ListGroup.Item>
   </ListGroup>    
          
    
      </>
    )
  }
}

export default MovieInfo;

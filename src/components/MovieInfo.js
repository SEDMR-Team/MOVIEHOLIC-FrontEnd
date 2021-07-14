import React from 'react';
import { ListGroup } from 'react-bootstrap';
import  './MovieInfo.css';
class MovieInfo extends React.Component {
  render() {
    const movie = this.props.movie;
    console.log('This is MovieInfo', movie);
    return (
      <>
   <ListGroup variant="flush" className="mt-3" style={{ textAlign: "left" }}>
       
          
   <ListGroup.Item id='tittle'><b> Movie tittle 🎥 : {movie.title}</b></ListGroup.Item>
   <ListGroup.Item id='tittle'> Overview 🎞 :{movie.overview}</ListGroup.Item>
   <ListGroup.Item id='tittle'> Rating ⭐:{movie.vote_average}</ListGroup.Item>
   </ListGroup>    
          
    
      </>
    )
  }
}

export default MovieInfo;

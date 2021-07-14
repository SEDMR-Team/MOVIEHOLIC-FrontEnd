import React, { Component } from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import './Profile.css'
import Movie from './Movie.js';

 class Profile extends Component {
    componentDidMount = () => {
        this.props.getFavoriteMovie();
      }
  render() {
      return (

        <>
        <>

        <img src="https://i.pinimg.com/originals/fb/02/47/fb02473b93a01c4413d81ce0fb46b4bf.gif"  height="400" width="440" id='heart'/>
        <img src="https://i.pinimg.com/originals/fb/02/47/fb02473b93a01c4413d81ce0fb46b4bf.gif"  height="400" width="455" id='heart'/>
        <img src="https://i.pinimg.com/originals/fb/02/47/fb02473b93a01c4413d81ce0fb46b4bf.gif"  height="400" width="454" id='heart'/>

          <h1 className="MD"> My Favorite Movies🎥🍿</h1>
        
          </>
        <Container>
          <div>
        <CardColumns>
          {this.props.savedMovies.map((movie,i) =>
            <Movie
              key={i}
              movie={movie}
              handleShowcard={this.props.handleShowcard}
              handleDelete={this.props.handleDelete}
            />)}
        </CardColumns>
        </div>
      </Container>

      </>
      )
  }
}


export default (Profile);
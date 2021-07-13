import React, { Component } from 'react'
import { Container, CardColumns } from 'react-bootstrap';
import Movie from './Movie.js';

 class Profile extends Component {
    componentDidMount = () => {
        this.props.getFavoriteMovie();
      }
  render() {
      return (

        <>
          <h1 className="MD">My Favorite Movies</h1>
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
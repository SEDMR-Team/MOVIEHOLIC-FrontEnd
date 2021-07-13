import React, { Component } from 'react'
// import { withAuth0 } from "@auth0/auth0-react";
import { Container, CardColumns } from 'react-bootstrap';
import Movie from './Movie.js';

 class Profile extends Component {
    componentDidMount = () => {
        this.props.getFavoriteMovie();
      }
  render() {
      return (
        <Container>
          <div>
        <h1 className="py-3">My Favorite Movies</h1>
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
      )
  }
}


export default (Profile);
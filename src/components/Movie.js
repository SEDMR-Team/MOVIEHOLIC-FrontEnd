import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
class Movie extends React.Component {
  handleClick = () => {
    const id = this.props.movie.id
    this.props.handleShowcard(id);
    this.props.history.push(`/movie/${id}`)
  }
  render() {
    const movie = this.props.movie;
    return (
      <Card onClick={this.handleClick} >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          {/* <Card.Text>{movie.overview}</Card.Text> */}
          <Card.Text>{`Rating ⭐ : ${movie.vote_average}`}</Card.Text>
          <Card.Text>{`Year: ${movie.release_date}`}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(Movie);
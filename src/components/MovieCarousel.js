import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

class MovieCarousel extends React.Component {
  render() {
    const movie= this.props.movie;
    return (
      <>
        {movie.poster_path ?
          <Container>
            <Carousel>
             
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={movie.poster_path}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Place holder</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            </Carousel>
          </Container>
          :
          ''
        }
      </>
    )
  }
}

export default MovieCarousel;
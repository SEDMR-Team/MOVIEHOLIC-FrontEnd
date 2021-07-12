import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from './hhh.png'
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
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt="First slide"
                  />
                
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Place holder</p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src={logo}
                    // src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuZ558cD7xPAfLEhDrBviwh9QQAUg0TXu9A&usqp=CAU`}
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
import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import logo from './movieee.jpg'
// import logo2 from './78913.HR.jpg'
import './SlideShow.css';
export class SlideShow extends Component {
    render() {
        return (
            <>
            <div id="slideShow">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="First slide"
                            style={{width:"200px",hight:"0px"}}
                        />
                        <Carousel.Caption>
                        <h1 id='ss'>WELCOM!</h1> 
                            <h1 id='ss'>Can't decide what you want to watch?</h1> 
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"http://meqasa.com/blog/wp-content/uploads/2017/01/movies-theater.gif"}
                            // src={logo2}
                            alt="Third slide"
                            style={{width:"200px",hight:"0px"}}
                            />
                         
                        <Carousel.Caption>
                          
                            <h2 id='ss'>We know that in todays world it can be hard to choose what to spend your time watching. With all of the different platforms and channels vying for your attention it can get confusing. Here at MovieHolic we've introduced  app with a few helpful functions to make sure you can spend 
                                less time deciding and more time watching.</h2>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"https://bloximages.newyork1.vip.townnews.com/wandtv.com/content/tncms/assets/v3/editorial/b/55/b55fe86e-a02f-11ea-b37e-b7c0b2855eda/5ece88e337f68.image.gif"}
                            alt="Second slide"
                            style={{width:"200px",hight:"0px"}}
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>










                </Carousel>
            </div>
            </>
        )
    }
}

export default SlideShow
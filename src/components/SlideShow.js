import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import logo from './movieee.jpg'
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
                            {/* <h3>BATMAN</h3> 
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>  */}
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"https://en-media.thebetterindia.com/uploads/2017/01/cinema-e1485785799647.jpg"}
                            alt="Third slide"
                            style={{width:"200px",hight:"0px"}}
                            />
                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </>
        )
    }
}

export default SlideShow
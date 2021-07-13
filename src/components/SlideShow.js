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
                            src={"https://news.northeastern.edu/wp-content/uploads/2016/06/theatre_1.gif"}
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
                            src={"https://static.videomaker.com/wp-content/uploads/2018/12/34-1cropped.jpg"}
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
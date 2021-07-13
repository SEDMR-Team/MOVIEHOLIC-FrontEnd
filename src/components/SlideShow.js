import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';

export class SlideShow extends Component {
    render() {
        return (
            <>
            <div id="slideShow">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={'https://a-static.besthdwallpaper.com/batman-2021-movie-poster-wallpaper-2560x1600-54803_7.jpg'}
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
                            src={"https://wallpaperaccess.com/full/3968126.jpg"}
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
                            src={"https://wallpapercave.com/wp/wp8163817.jpg"}
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
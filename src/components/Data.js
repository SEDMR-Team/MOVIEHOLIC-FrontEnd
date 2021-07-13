import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export class Data extends Component {
    render() {
        return (
            <div id='location'>
                  <h2 class='h2'>{this.props.display_name}</h2>
                  <h4 class='h4'> overview :{this.props. overview}</h4>
                  <h4 class='h4' >vote_average :{this.props.vote_average}</h4>
                  <Image  src={`https://image.tmdb.org/t/p/w300/${this.props.movie_img}`}  />;
                
            </div>
        )
    }
}

export default Data
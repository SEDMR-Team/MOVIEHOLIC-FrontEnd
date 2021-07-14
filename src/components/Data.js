import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { ListGroup , Col } from 'react-bootstrap';
import './Data.css'
export class Data extends Component {
    render() {
        return (
    <div>
        {this.props.topData.map(item=>{
            return(
              <>
           <Col xs={6} md={4}>   
      <Image src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} roundedCircle id='pic' />
      </Col>  
             
                <ListGroup variant="flush" className="mt-3" style={{ textAlign: "left" }}>
                    
                       
                <ListGroup.Item id='tittle'><b> 🎥  {item.title} 🎥</b></ListGroup.Item>
                <ListGroup.Item id='tittle'> Overview 🎞 :{item.overview}</ListGroup.Item>
                <ListGroup.Item id='tittle'> Rating ⭐:{item.vote_average}</ListGroup.Item>
                <ListGroup.Item id='tittle'>release_date:{item.release_date}</ListGroup.Item>
                </ListGroup>    
                       
                 
                </>  

            )
        })}
    </div>
            // <div >
            //       <h2 class='h2'>{this.props.display_name}</h2>
            //       <h4 class='h4'> overview :{this.props. overview}</h4>
            //       <h4 class='h4' >vote_average :{this.props.vote_average}</h4>
            //       <Image  src={`https://image.tmdb.org/t/p/w300/${this.props.movie_img}`}  />;
                
            // </div>
        )
    }
}

export default Data
import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SearchingForm.css'

export class SearchingForm extends Component {
    render() {
        return (
<>
            
            <div id='form'>
                <>
            <h1 id='ff'>
            Did you forget the name of the movie?<br/> You remember one word or one syllable 
            from the name of it!<br/> write it here and we will help you find your movie! 
            </h1>
            <img id='bob1' src="https://cdn.dribbble.com/users/1018020/screenshots/4517235/braintheater.gif" height="330" width="250"/>
            </>
       <Form onSubmit={this.props.getData} id='fo'>
            <Form.Group id='group'>
              <Form.Label id ='la'> keyword : </Form.Label>
              <Form.Control id="input" placeholder="Keyword"  type="text"  onChange={this.props.updatePage}  />
              
            </Form.Group>
            <Button variant="danger" type="submit" id='boo'>
              Explore!
            </Button>
          </Form>

         </div>
         </>   
        )
    }
}

export default SearchingForm
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import './SearchingForm.css';
export class SearchingForm extends Component {
    render() {
        return (
            <div id='form'>
       
       <Form onSubmit={this.props.getData}>
            <Form.Group id='group'>
              <Form.Label> Page : </Form.Label>
              <Form.Control id="input" placeholder="page✈️"  type="text"  onChange={this.props.update}  />
              
            </Form.Group>
            <Button variant="warning" type="submit">
              Explore!
            </Button>
          </Form>

         </div>
            
        )
    }
}

export default SearchingForm
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//  import './SearchingForm.css';
export class SearchingForm extends Component {
    render() {
        return (
            <div id='form'>
       
       <Form onSubmit={this.props.getData}>
            <Form.Group id='group'>
              <Form.Label> keyword : </Form.Label>
              <Form.Control id="input" placeholder="Keyword✈️"  type="text"  onChange={this.props.updatePage}  />
              
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
// import React, { Component } from 'react'

// export class SearchBar extends Component {
//     render() {
//         return (
//             <div>
//                  <Form.Group>

// <br />
// <Col>
// <Form.Control as="select">
//     <option>Search By Genres</option>
//     <option>Action</option>
//     <option>Comedy</option>
//     <option>Drama</option>
//     <option>Fantasy</option>
//     <option>Horror</option>
//     <option>Mystery</option>
//     <option>Romance</option>
//     <option>Thriller</option>
// </Form.Control>
// <br />

// <Form.Group controlId="formGridAddress1">
//     <Form.Label>Search By Year</Form.Label>
//     <Form.Control placeholder="2016" />
// </Form.Group>
// <br />
// <Button variant="primary" type="submit">
//     CLICK TO SEARCH
// </Button>
// </Col>

// <br />

// </Form.Group>

//             </div>
//         )
//     }
// }

// export default SearchBar


import React from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <Container className="bg-dark">
          <Form onSubmit={this.props.handleSubmit}>
            <Row className="justify-content-center">
              <Col>
                <Form.Control name="primary_release_year" placeholder="Year" onChange={e => this.props.handleOnChange(e)} value={this.props.primary_release_year}/>
              </Col>
              <Col>
              <Form.Control  name="with_genres"    as="select"  onChange={e => this.props.handleOnChange(e)} value={this.props.with_genres}>
    <option >Search By Genres</option>
    <option value='28' >Action</option>
    <option value='35'>Comedy</option>
    <option value='12'>Adventure</option>
     <option value='16'>Animation</option>
   <option value='80'>Crime</option>
     <option value='99'>Documentary</option>
    <option value='10749'>Romance</option>
     <option value='18'>Drama</option>
<option value='10751'>Family</option>
<option value='14'>Fantasy</option>
<option value='36'>Horror</option>
<option value='36'>History</option>
<option value='27'>Horror</option>
<option value='10402'>Music</option>
 </Form.Control>
              
              </Col>
              <Col>
                <Button variant="primary" type="submit">GO</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }
}

export default SearchBar;




import React from 'react';
import { Form, Col, Row, Button, Container} from 'react-bootstrap'
import SlideShow from './SlideShow.js';
import './SearchBar.css';
// import FloatingLabel from "react-bootstrap-floating-label";
class SearchBar extends React.Component {
  render() {
    return (
      <>
          <SlideShow/>
        <Container className="py-3">

          <Form onSubmit={this.props.handleSubmit}>
            <Row className="d-flex justify-content-center">
              <Col xs={5} className="pr-0">
             
                <Form.Control required name="year" placeholder="release_date" onChange={e => this.props.handleOnChange1(e)} value={this.props.year} />
            
              </Col>
              <Col xs={5} className="pl-0 pr-0">
              
                <Form.Control required name="with_genres" placeholder="Genre" as="select" onChange={e => this.props.handleOnChange(e)} value={this.props.with_genres}>
                  <option >Search By Genres</option>
                  <option value='28' >Action</option>
                  <option value='35'>Comedy</option>
                  <option value='12'>Adventure</option>
                  <option value='16'>Animation</option>
                  <option value='80'>Crime</option>
                  <option value='10749'>Romance</option>
                  <option value='18'>Drama</option>
                  <option value='10751'>Family</option>
                  <option value='14'>Fantasy</option>
                  <option value='36'>History</option>
                  <option value='27'>Horror</option>
                  <option value='10402'>Music</option>
                
                </Form.Control>
               
              </Col>

              {/* <Col xs={5} >
                <Form.Control required name="page" placeholder="page" onChange={e =>this.props.handleOnChange2(e)} value={this.props.page} >
                
                  </Form.Control>
              </Col> */}

              <Col xs={2} id="searchButton" className="pl-0 pr-0">
                <Button variant="dark" type="submit"  >Search</Button>
              </Col>
              
            </Row>
          </Form>
        </Container>

 
      </>
    )
  }
}

export default SearchBar;

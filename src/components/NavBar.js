import React, { Component } from 'react'
import { Navbar, Button, FormControl, Form, Nav, NavDropdown, Col , Row} from 'react-bootstrap';


export class NavBar extends Component {
    render() {
        return (
            <>
                <div>
                
                    <Col>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">MOVIEHOLIC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Movie Comparison</Nav.Link>
                                <Nav.Link href="#link">Profile</Nav.Link>
                                {/* <NavDropdown title="Search By Genres" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Mystery</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Button variant="outline-success">Search</Button>

                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </div>

                <Form.Group>

                    <br />
                    <Col>
                    <Form.Control as="select">
                        <option>Search By Genres</option>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                        <option>Mystery</option>
                        <option>Romance</option>
                        <option>Thriller</option>
                    </Form.Control>
                    <br />

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Search By Year</Form.Label>
                        <Form.Control placeholder="2016" />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        CLICK TO SEARCH
                    </Button>
                    </Col>
                 
                    <br />

                </Form.Group>
                
            </>
        )
    }
}

export default NavBar

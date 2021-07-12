import React, { Component } from 'react'
import { Navbar,  Nav , Col} from 'react-bootstrap';
import LoginButton from './LoginButton';


export class NavBar extends Component {
    render() {
        return (
            <>
                <div>
                
                    <Col>
                    <Navbar bg="light" expand="lg">
                    <LoginButton />
                        <Navbar.Brand href="#home">MOVIEHOLIC</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link id="navWords" href="#home">Movie Comparison</Nav.Link>
                                <Nav.Link   href="#link">Profile</Nav.Link>
                            </Nav>
                            {/* <Form inline>
                              
                                <FormControl onChange={(e)=>this.props.searchMovie(e)} type="text" placeholder="Search By Movie Name" className="mr-sm-2" />
                            </Form>
                            <Button variant="outline-success">Search</Button> */}

                        </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </div>

               
            </>
        )
    }
}

export default NavBar

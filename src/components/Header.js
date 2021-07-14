import React from 'react';
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoo1 from './1.png'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'



class Header extends React.Component {


  render() {

    const isAuthenticated = this.props.isAuthenticated;


    return (


      <Navbar id='bac' variant="dark"  >
        <Navbar.Brand href="#home" id='font'   >


          {/* <img src={logoo} style={{ width: 120, height: 100, marginTop: -7 }} /> */}
          <img src={logoo1} style={{ width: 140, height: 150, marginTop: 8 }} id='img' />



        </Navbar.Brand>

        <Nav className="mr-auto" id='nav'>


          <Nav.Link className='mr-5 ml-1' >
            <Link to="/" id ='col'>Home</Link>
          </Nav.Link>




          <Nav.Link className='mr-5 ml-1' >
            <Link to="./AboutUs" id ='col's>About Us</Link>
          </Nav.Link>


          <Nav.Link className='mr-5 ml-1' >
            <Link to="./TopMovies" id ='col's>Find Movies</Link>
          </Nav.Link>



          {isAuthenticated ?
            <Nav.Link className='mr-5 ml-1' >
              <Link to="/profile" id ='col'>Profile</Link>
            </Nav.Link>
            : ''
          }
        
        </Nav>

        {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      </Navbar>


    )
  }
}

export default Header;














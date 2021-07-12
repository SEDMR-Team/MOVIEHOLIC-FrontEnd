
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton';
// import NavBar from './NavBar';
import { Navbar, Nav } from 'react-bootstrap';
// import SlideShow from './SlideShow';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <header>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">MovieHolic</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            {isAuthenticated ?
              <Nav.Link>
                <Link to="/profile">Profile</Link>
                <Link to="/AboutUs">About Us</Link>
              </Nav.Link>
              : ''
            }
          </Nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </header>
    )
  }
}

export default Header;
















// import React, { Component } from 'react'
// import LoginButton from './LoginButton'
// import LogoutButton from './LogoutButton'
// import AboutUs from './AboutUs'
// import SearchBar from './SearchBar'



// export class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <AboutUs/> 
//                 <SearchBar/>
//                 <LogoutButton/>
//             </div>
//         )
//     }
// }

// export default Header

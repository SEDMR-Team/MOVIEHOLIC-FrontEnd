
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
            
              <Nav.Link id="navLink">
                <Link to="./AboutUs">About Us</Link>       
              </Nav.Link>
        
            {isAuthenticated ?
              <Nav.Link id="navLink">
          
                <Link to="/profile">Profile</Link>
     
              </Nav.Link>
              : ''
            }
<<<<<<< HEAD

{isAuthenticated ?
=======
            {/* {isAuthenticated ?
>>>>>>> 07fdb8969b43dba5dbff5283f44e928363650cd6
              <Nav.Link id="navLink">
                <Link to="/">Compare Movies</Link>
        
              </Nav.Link>
              : ''
<<<<<<< HEAD
            }
            
      
              <Nav.Link id="navLink">
         
                <Link to="/AboutUs">About Us</Link>
              </Nav.Link>
            
            
=======
            } */}
>>>>>>> 07fdb8969b43dba5dbff5283f44e928363650cd6
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

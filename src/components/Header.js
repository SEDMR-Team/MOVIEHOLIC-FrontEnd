import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton';

// import NavBar from './NavBar';
import './Header.css'
import { Navbar, Nav } from 'react-bootstrap';
// import SlideShow from './SlideShow';
import { Link } from 'react-router-dom';
import logoo from './hhh.gif'
import logoo1 from './1.png'
// var Img = <img src={logoo}/>
class Header extends React.Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    return (
      <header>
       <Navbar id='bac' variant="dark"  >
          <Navbar.Brand href="#home" id='font'   >

          
          <img src={logoo} style={{width:120,height:100, marginTop: -7}} />
          <img src={logoo1} style={{width:140,height:150, marginTop: -7}} />
          
         

          </Navbar.Brand>
          <Nav className="mr-auto" id='nav'>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            
              <Nav.Link id="navLink">
                <Link to="./AboutUs">About Us</Link>       
              </Nav.Link>
           

            <Nav.Link className='mr-5 ml-1'>
              <Link to="./AboutUs">About Us</Link>
            </Nav.Link>

            {isAuthenticated ?
              <Nav.Link className='mr-5 ml-1' >
                <Link to="/profile">Profile</Link>
              </Nav.Link>
              : ''
            }
<<<<<<< HEAD



            {/* {isAuthenticated ?
=======
             {isAuthenticated ?
>>>>>>> 6458dac9fc6a4cc460c9209dc3ff10a9d57628b5
              <Nav.Link id="navLink">
                <Link to="/">Compare Movies</Link>
        
              </Nav.Link>
              : ''
<<<<<<< HEAD
            } */}
            {/*             
=======
            }
            
>>>>>>> 6458dac9fc6a4cc460c9209dc3ff10a9d57628b5
      
              {/* <Nav.Link id="navLink">
         
                <Link to="/AboutUs">About Us</Link>
              </Nav.Link>
             */}
            
<<<<<<< HEAD
             */}
=======
>>>>>>> 6458dac9fc6a4cc460c9209dc3ff10a9d57628b5
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

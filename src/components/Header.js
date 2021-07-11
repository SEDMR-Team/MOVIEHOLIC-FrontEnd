
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <LoginButton />
        {!this.props.isAuthenticated ? '' : <LogoutButton />}
      </>
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

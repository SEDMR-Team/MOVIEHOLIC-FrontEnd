import React, { Component } from 'react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import AboutUs from './AboutUs'
import SearchBar from './SearchBar'



export class Header extends Component {
    render() {
        return (
            <div>
                <AboutUs/> 
                <SearchBar/>
                <LogoutButton/>
            </div>
        )
    }
}

export default Header

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
// import { withAuth0 } from "@auth0/auth0-react";
import Header from './components/Header.js';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import './App.css'; 



export class App extends Component {
  render() {
    return (
      <div>

        <Router>
          {/* <Header /> */}
         
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/profile">
            <Profile />
            </Route>
          </Switch>
         
          {/* <Footer /> */}

        </Router>
      </div>
    )
  }
}

export default App

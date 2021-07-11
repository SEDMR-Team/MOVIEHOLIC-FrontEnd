
import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    movies: []
    }
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/movie`)
      .then(res => {
        this.setState({
         movies:res.results
   
        });

      })
      .catch(err => console.log(err));
  }

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header isAuthenticated={isAuthenticated} />
        <Main  movies={this.state.movies} />
        <Footer />
      </>
    )
  }
}

export default withAuth0(App)
























// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import axios from 'axios';
// import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
// // import { withAuth0 } from "@auth0/auth0-react";
// import Header from './components/Header.js';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import './App.css'; 



// export class App extends Component {
//   render() {
//     return (
//       <div>

//         <Router>
//           {/* <Header /> */}
         
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>

//             <Route path="/profile">
//             <Profile />
//             </Route>
//           </Switch>
         
//           {/* <Footer /> */}

//         </Router>
//       </div>
//     )
//   }
// }

// export default App

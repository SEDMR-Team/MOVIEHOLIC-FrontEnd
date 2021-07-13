import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
// import Home from './components/Home.js';
// import Profile from './components/Profile.js';
import Footer from './components/Footer.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

// import NavBar from './components/NavBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      with_genres: '',
      primary_release_year: '',
      movie: {},
      savedMovies: [],
      page:''
    }
  };



  pageHandler = e => {
    this.setState({
      [e.target.page]: e.target.value
    })
    console.log('value', e.target.value)
    console.log('name value', e.target.page)
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('value', e.target.value)
    console.log('name value', e.target.name)
  };


  handleShowcard = async (id) => {
    let res = await axios.get(`http://localhost:5001/movie/${id}`);
    console.log(res);
    this.setState({
      movie: res.data
    });
    console.log('ohhhhhh', this.res);
  }



  componentDidMount = () => {
    axios.get('http://localhost:5001/movie')
      .then(res => {
        this.setState({
          movies: res.data

        });
      })
      .catch(err => console.log(err));
  };

  getMoviesData = async (e) => {
    e.preventDefault();
    try {
      let moviesData = await axios.get('http://localhost:5001/search',
        {
          params: {
            primary_release_year: this.primary_release_year,
            with_genres: this.state.with_genres
          }
        });
      this.setState({
        movies: moviesData.data,
        primary_release_year: '',
        with_genres: ''
      });
    } catch (err) {
      this.setState({ error: `${err.message}` });
    }
  };

//for save :

handleSave = () => {
  const body = {};
  body.email = this.props.auth0.user.email;
  body.movie = this.state.movie;
  axios.post(`http://localhost:5001/movie/save`, body)
    .then(res => console.log('save', res))
    .catch(error => console.log(error))
}


getFavoriteMovie = () => {
  axios.get(`http://localhost:5001/movie/profile?email=${this.props.auth0.user.email}`)
    .then(movieData => {
      console.log(movieData.data, 'working');
      this.setState({
        savedMovies: movieData.data
      })
    })
    .catch(err => console.log(err))
};

handleDelete = id => {
  axios.delete(`http://localhost:5001/movie/${id}`,
    {
      params: {
        email: this.props.auth0.user.email,
      }
    })
    .then(res => {
      this.setState({
        savedMovies: res.data
      });
    })
    .catch(err => console.log(err));
};




  render() {
    // console.log('movies', this.moviesData)
    const { isAuthenticated } = this.props.auth0;
    return (
      <>

        <Header isAuthenticated={isAuthenticated} />
      
        <Main
         isAuthenticated={isAuthenticated}
         savedMovies={this.state.savedMovies}
         getFavoriteMovie={this.getFavoriteMovie}
          movies={this.state.movies}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.getMoviesData}
          pageHandler={this.pageHandler}
          with_genres={this.state.with_genres}
          page={this.state.page}
          primary_release_year={this.state.primary_release_year}
          handleShowcard={this.handleShowcard}
          movie={this.state.movie}
          handleSave={this.handleSave}
          handleDelete={this.handleDelete}
        />


        {/* <Router>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Home">
              <Profile />
            </Route>
          </Switch>


        </Router> */}

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

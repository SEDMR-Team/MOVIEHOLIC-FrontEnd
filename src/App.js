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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SlideShow from './components/SlideShow.js'
import Swal from 'sweetalert2'
// import NavBar from './components/NavBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      with_genres: '',
    year:0,
      page:'',
      movie: {},
      savedMovies: [],
  

    }
  };

// =======================================================


  pageHandler = e => {
    this.setState({
      [e.target.page]: e.target.value
    })
    console.log('value', e.target.value)
    console.log('name value', e.target.page)
  };
// =======================================================

  handleOnChange = e => {
   e.preventDefault();
    this.setState({
  
      with_genres:e.target.value
    })
    console.log( e.target.value)

  };
// =======================================================

  handleOnChange1 = e => {
    e.preventDefault();
     this.setState({
       year:e.target.value,
     
     })
     console.log( e.target.value)
 
   };
   

   handleOnChange2 = e => {
    e.preventDefault();
     this.setState({
      page:e.target.page,
     
     })
     console.log(e.target.value)
 
   };
   


  

  handleShowcard = async (id) => {
    let res = await axios.get(`http://localhost:5001/movie/${id}`);
    console.log(res);
    this.setState({
      movie: res.data
    });
    console.log('ohhhhhh', this.res);
  }


// =======================================================

  componentDidMount = () => {
    axios.get('http://localhost:5001/movie')
      .then(res => {
        this.setState({
          movies: res.data

        });
      })
      .catch(err => console.log(err));
  };
// =======================================================
getPagesData=async(page)=>{
  try {
    let moviesData = await axios.get('http://localhost:5001/search',
      {
        params: {
         year: this.state.year,
          with_genres: this.state.with_genres
          
        }
      });
    this.setState({
      movies: moviesData.data,
  //  year:this.state.year,
  //     with_genres: this.state.with_genres
    });
  } catch (err) {
    this.setState({ error: `${err.message}` });
  }
}

updatePage=(page)=>{
  this.setState(
    {
      page:page
    }

  )

}

  getMoviesData = async(e) => {
    e.preventDefault();
    try {
      let moviesData = await axios.get('http://localhost:5001/search',
        {
          params: {
           year: this.state.year,
            with_genres: this.state.with_genres,
            page:this.state.page

            
          }
        });
      this.setState({
        movies: moviesData.data,
      year:this.state.year,
         with_genres: this.state.with_genres,
         page:this.state.page
      });
    } catch (err) {
      this.setState({ error: `${err.message}` });
    }
  };


  


















// =======================================================
  //for save :

  handleSave = () => {
    const body = {};
    body.email = this.props.auth0.user.email;
    body.movie = this.state.movie;
    axios.post(`http://localhost:5001/movie/save`, body)
      .then(res => {
        console.log(res.data)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Add Successfully '
        })
      }
      ).catch(error => console.log(error))
  }

// =======================================================

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
// =======================================================

  handleDelete = id => {
    axios.delete(`http://localhost:5001/movies/${id}`,
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
  }

// =======================================================


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
          handleOnChange1={this.handleOnChange1}
          handleOnChange2={this.handleOnChange2}
          handleSubmit={this.getMoviesData}
          handleSubmit1={this. getTopRated}
         
          pageHandler={this.pageHandler}
          with_genres={this.state.with_genres}
          year={this.state.year}
        page={this.state.page}
          handleShowcard={this.handleShowcard}
          movie={this.state.movie}
          handleSave={this.handleSave}
          handleDelete={this.handleDelete}
          // updatePage={this.updatePage}
      
        />

<div id='btween'></div>
       
        <Footer />

      </>
    )
  }
}

export default withAuth0(App)



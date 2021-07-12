import React from 'react';
import MovieColumns from './MovieColumns.js';
// import MovieCarousel from './MovieCarousel.js'
import SearchBar from './SearchBar';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile.js';
import MovieDetail from './MovieDetail.js'
class Main extends React.Component {
  render() {
    return (
      <>
       <SearchBar
          handleOnChange={this.props.handleOnChange} 
          handleSubmit={this.props.handleSubmit}
          with_genres={this.props.with_genres}
          primary_release_year={this.props.primary_release_year}
        />

<Switch>
          <Route exact path="/">
            <MovieColumns
            movies={this.props.movies}
              handleShowcard={this.props.handleShowcard}
            />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail
              movie={this.props.movie}
            />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>



{/* <MovieDetail
          movie={this.props.movie}
        /> */}


               {/* <MovieColumns 
               movies={this.props.movies} 
               handleShowcard={this.props.handleShowcard}
               
               
               /> */}

{/* <MovieCarousel
          movie={this.props.movie}
        /> */}


      </>
    )
  }
}

export default Main;
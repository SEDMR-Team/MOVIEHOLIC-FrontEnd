import React from 'react';
import MovieColumns from './MovieColumns.js';
// import MovieCarousel from './MovieCarousel.js'
import SearchBar from './SearchBar';
import { Switch, Route ,Alert } from 'react-router-dom';
import Profile from './Profile.js';
import MovieDetail from './MovieDetail.js'
import AboutUs from './AboutUs.js';
class Main extends React.Component {
  render() {
    return (
      
      <main>
         <Switch>
         <Route exact path="/">
        <SearchBar
          handleOnChange={this.props.handleOnChange}
          handleOnChange1={this.props.handleOnChange1}
          handleSubmit={this.props.handleSubmit}
          with_genres={this.props.with_genres}
          primary_release_year={this.props.primary_release_year}
        />
        <MovieColumns
          movies={this.props.movies}
          handleShowcard={this.props.handleShowcard}
        />
       
</Route>
<Route exact path="/AboutUs">
  <AboutUs/>
  </Route> 
          <Route exact path="/movie/:id">
            <MovieDetail
              movie={this.props.movie}
              handleSave={this.props.handleSave}

            />
          </Route>
          {this.props.isAuthenticated ?
            <Route exact path="/profile">
              <Profile

                savedMovies={this.props.savedMovies}
                getFavoriteMovie={this.props.getFavoriteMovie}
                handleDelete={this.props.handleDelete}
              />
            </Route>
            : ''}
        </Switch>
      </main>
    )
  }
}

export default Main;



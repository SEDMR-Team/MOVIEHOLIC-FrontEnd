import React from 'react';
import MovieColumns from './MovieColumns.js';
// import MovieCarousel from './MovieCarousel.js'
import SearchBar from './SearchBar';
import { Switch, Route ,Alert } from 'react-router-dom';
import Profile from './Profile.js';
import MovieDetail from './MovieDetail.js'


class Main extends React.Component {
  render() {
    return (
      
      <main>
{/* <Alert variant="filled" severity="success">
  This is a success alert — check it out!
</Alert> */}

        <Switch>
          <Route exact path="/">
            <SearchBar
              handleOnChange={this.props.handleOnChange}
              handleSubmit={this.props.handleSubmit}
              with_genres={this.props.with_genres}
              primary_release_year={this.props.primary_release_year}
            />
            <MovieColumns
              movies={this.props.movies}
              handleShowcard={this.props.handleShowcard}


            />
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


{/* 
<MovieDetail
          movie={this.props.movie}
        />


       

        <MovieCarousel
          movie={this.props.movie}
        />  */}


{/*       
    )
  }
} */}


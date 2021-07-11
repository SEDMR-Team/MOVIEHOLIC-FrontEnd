import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import BestBook1 from './BestBook1';


 class Profile extends Component {
  render() {
      return (
          <div>
              {
                  this.props.auth0.isAuthenticated&&
                  <>
                  <h1>this the profile page</h1>
                  <h1>{this.props.auth0.user.name}</h1>
                  <br/>
                  <h1>{this.props.auth0.user.email}</h1>
                  <br/>
                  <img src={this.props.auth0.user.picture} alt={this.props.auth0.user.name}/>
                  </>
              }
              
          </div>
      )
  }
}


export default withAuth0(Profile);
import React, { Component } from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Errormsg from './Errormsg';
import SearchingForm from  './SearchingForm'
import Data from  './Data'


 class TopMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
        query: '',
    topData: {},
      disalay:false,
      error:'',
      alert:false,
     

    };
  }


  getData=async(event)=>{
    event.preventDefault();
    
    try{
       
        let query =req.query.query
      const url=`https://api.themoviedb.org/3/search/movie?api_key=b7e66d37aebc415226444c14cfe515e4&query=${query}&limit=8`;
      const req=await axios.get(url);
     

      
      this.setState({
        topData:req.body.results,
       disalay:true,
       alert:false,
   
      });
      console.log(this.topData)
     
    } catch(err){
      console.log('eroooooooooooor');
    }
  
  };

 
  updatePage=(event)=>{
    event.preventDefault();
    this.setState({
        query:event.target.value

    });
  
    
  };



  render() {
    return (
<div>
    <Errormsg  alert={this.state.alert} error=
    {this.state.error}/>
      
< SearchingForm getData={this.getData } updatePage={this.updatePage}
    />
    {this.state.disalay &&
      <>

      <Data 
    
    //   movie_img={this.setState.topData.poster_path}
      original_title ={this.state.topData.original_title} 
      overview={this.state.topData.overview} 
      vote_average= {this.state.topData.vote_average}/>


       
  </>
  }
</div>
    );
  }
}
          
        

export default TopMovies 

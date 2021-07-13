import React, { Component } from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Errormsg from './components/Errormsg';
import SearchingForm from  './components/SearchingForm'
import Location from  './components/Location'


 class TopMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
     page: '',
    topData: '',
      disalay:false,
      error:'',
      alert:false,
     

    };
  }


  getData=async(event)=>{
    event.preventDefault();
    try{

      const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=b7e66d37aebc415226444c14cfe515e4&language=en-US&page=${this.state.page}`;
      const req=await axios.get(url);

      

      
      this.setState({
        topData:req.data[0],
       disalay:true,
       alert:false,
    
      });

     
    } catch(err){
      this.setState(
        {error: `${err.message}: ${err.response.data.error}`,
      alert:true})
    }
  
  };

 
  updatePage=(event)=>{
    event.preventDefault();
    this.setState({
 page:event.target.page,

    });
  
    
  };



  render() {
    return (
<div>
    <Errormsg  alert={this.state.alert} error=
    {this.state.error}/>
      
< SearchingForm getData={this.getData } updateCity={this.updateCity}
    />
    {this.state.disalay &&
      <>

      <Location display_name ={this.state.cityData.display_name} 
      lon={this.state.cityData.lon} lat= {this.state.cityData.lat}/>

<Weather weatherInfo={this.state.weatherData}/>
<Movies movieInfo={this.state.movieData}/>
       
       
  </>
  }
</div>
    );
  }
}
          
        

export default TopMovies 


import React from "react";
import logoo from './hhh.gif'
import './Footer.css'


const Footer = () => {
  return (
  

    <footer className="footer" id='border'>
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About Our Website</span> MOVIEHOLIC it's website that help you to find the best movies , compare      between movies, you can rate and save your favorite movies ,
          and it's built by three of best members of ASAC college
        </p>
        <div id="btnSocial">
        <p className="about">You can visit on out GITHUB profile </p>
               <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/SEDMR-Team" role="button"
              ><i className="fab fa-github"></i
              ></a>
          
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Amman Jordan</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> <span> (+962) 790929803</span>
        
         <span>(+962) 780824342</span> </p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>

          <p><a href="#"> office@movieholic.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>MOVIEHOLIC</h2>
        <p className="menu">
          <a href="#"> Home</a>  |
          <a href="/AboutUs"> About Us</a>  |
          <a href="/profile"> Profile</a>
        </p>
        <p className="name"> &copy; Copyright 2021 : MOVIES HOLIC </p>
        {/* <img src={logoo} height="200" width="250" id='corn' /> */}
      </div>
    </footer>
  );
}


export default Footer;

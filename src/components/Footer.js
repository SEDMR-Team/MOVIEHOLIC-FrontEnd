
import React from "react";
// import './styleFooter.css';

// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import AboutUs from "./AboutUs";

const Footer = () => {
  return (
    // <MDBFooter color="black" className="font-small pt-4 mt-4">
    //   <MDBContainer fluid className="text-center text-md-left">
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <h5 className="title">MOVIESHOLIC</h5>
    //         <p>

    //         </p>
    //       </MDBCol>
    //       <MDBCol md="6">
    //         <h5 className="title">Profile</h5>
    //         <ul>
    //           <li className="list-unstyled">
    //             <a href="#!">Movies Comparison</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">About us</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Contact Us</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">FeedBack</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MOVIESHOLIC</a>
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>

    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About our website</span> movieholic it's website that help you to find the best movies , compare      between movies, you can rate and save your favourite movies .
          movieholic built by 3 members of ASAC school
        </p>
        <div class="icons">
          <a href="#"><i className="fa fa-facebook"><span class="material-icons-outlined">
               facebook
               </span></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-google-plus"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span> Street name and number</span> City, Country</p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>

          <p><a href="#"> office@movieholic.com</a></p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <h2>MOVIES HOLIC<span> logo</span></h2>
        <p class="menu">
          <a href="#"> Home</a> |
          <a href="#"> About</a> |
          <a href="#"> Services</a> |
          <a href="#"> Portfolio</a> |
          <a href="#"> News</a> |
          <a href="#"> Contact</a>
        </p>
        <p class="name">MOVIES HOLIC &copy; 2021</p>
      </div>
    </footer>
  );
}


export default Footer;

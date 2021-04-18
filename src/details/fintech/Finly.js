import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";
import { Link } from "react-router-dom";
export default function Finly(){
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/Finly/app_pic4_finly.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/Finly/logo_finly.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Finly</h1>
      </div>
      <div className="box-new">
        <p> Finly is designed to simplify business spend and expense management by providing finance teams with tools and data to get a better insight into their spend </p>
        <br></br>
        <p>70% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='70' />
      </div>
      <div className="container2">
      <h2>BUSINESS OVERVIEW</h2>

      <div class="row">
      <div class="column1">
          <p>Location</p>
          <p>Social Media</p>
          <p>Website</p>
          <p>Sector</p>
          <p>Company number</p>
          <p>Incorporation date</p>
          <p>Founded</p>
          <p>Valuation (in INR)</p>
      </div>
      <div class="column">
          <p>Bangalore,Karnataka</p>
          <div className="socials">
          <a href="https://www.facebook.com/finlyHQ/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/finlyAP" class="fa fa-twitter"></a>
          <a href="https://in.linkedin.com/company/finlyhq " class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://finlyhq.com/">finly.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>099378 90112 </p>
          <p>4 January 2016</p>
          <p>October 24, 2015</p>
          <p>90 lakhs</p>
      </div>
      <div class="column3">
            <Link to="/crowdfund">
              <button class="button button2">Click here to fund</button>
            </Link>
            <div>. Connect - Authorize Amount - Fund .</div>
          </div>
      </div>
      </div>
      
    </>

  )
}
 


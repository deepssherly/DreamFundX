import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function Instamojo(){
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/Instamojo/insta.jpg" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/Instamojo/logo_im.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Instamojo</h1>
      </div>
      <div className="box">
        <p> Instamojo is a full-stack transactional platform aimed at bringing small business online. With transactions being a key part of every business, we pioneered Payment Links in India, an easy to start and easy to integrate payment solution </p>
        <br></br>
        <p>80% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='80' />
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
          <p>Hyderabad,Telangana</p>
          <div className="socials">
          <a href="https://www.facebook.com/Instamojo " class="fa fa-facebook"></a>
          <a href="https://twitter.com/instamojo " class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/instamojo/  " class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.instamojo.com/ ">instamojo.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>093781 86736 </p>
          <p>12 March 2013</p>
          <p>2012</p>
          <p>85 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
 


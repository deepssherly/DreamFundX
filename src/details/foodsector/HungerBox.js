import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function HungerBox() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/HungerBox/hb_ba.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/HungerBox/HungerBox_logo.jpg" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>HungerBox</h1>
      </div>
      <div className="box">
        <p>HungerBox is a B2B food-tech startup founded by Sandipan Mitra in 2007. The startup is a full-stack B2B and F&B (food and beverage) technology venture and delivers food solutions for corporate clients.</p>
        <br></br>
        <p>75% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='75'/>
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
          <p>Bangalore, Karnataka</p>
          <div className="socials">
          <a href="https://www.facebook.com/HungerBoxapp/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/hungerboxapp?lang=en" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/hungerbox/?originalSubdomain=in" class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.hungerbox.com/">hungerbox.com</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>091348 35905</p>
          <p>Dec 2014</p>
          <p>June 2013</p>
          <p>75 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}            
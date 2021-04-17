import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function FreshMenu() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/FreshMenu/freshmenu_banner.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/FreshMenu/Freshmenu_logo.jpg" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>FreshMenu</h1>
      </div>
      <div className="box">
        <p>FreshMenu is a Bangalore-based restaurant that offers freshly prepared food from cuisines such as oriental, continental, Italian, Mughlai and others.</p>
        <br></br>
        <p>50% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='50' />
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
          <a href="https://www.facebook.com/FreshMenuIndia" class="fa fa-facebook"></a>
          <a href="https://twitter.com/FreshMenuINDIA" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/freshmenu/?originalSubdomain=in" class="fa fa-linkedin"></a>
          </div>

          <p><a href="http://www.freshmenu.com/?utm_source=cutshort&utm_medium=company_page">freshmenu.com</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>091249 30785</p>
          <p>19 August, 2014</p>
          <p>2013</p>
          <p>80 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
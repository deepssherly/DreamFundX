import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function OsomeFoods() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/Osome_Foods/pic4_osm.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/Osome_Foods/logo_osm.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Osome Foods</h1>
      </div>
      <div className="box">
        <p>Osome provide alternative healthy snacking option for modern lifestyle.We follow basic and traditional process so that we can be sure that everything we make should be nearest to mother nature.</p>
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
          <p>Rajkot, Gujarat</p>
          <div className="socials">
          <a href="https://www.instagram.com/osome.foods/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/Osome83465970" class="fa fa-twitter"></a>
          <a href="https://in.linkedin.com/company/osomefoods" class="fa fa-linkedin"></a>
          </div>

          <p><a href="http://osome.in/">osome.in</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>090990 96650</p>
          <p>18 june 2017</p>
          <p>2016</p>
          <p>85 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}









 


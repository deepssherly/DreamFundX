import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function NiteFoodie() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/NiteFoodie/nitefoodie_banner.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/NiteFoodie/Nitefoodie_logo.jpg" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>NiteFoodie</h1>
      </div>
      <div className="box">
        <p>NiteFoodie is a fast growing startup focused on providing Night Time Convenience be it food, meds, utilities or munchies.NiteFoodie powers consistency in availability of all items, like its a day!</p>
        <br></br>
        <p>40% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='40' />
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
          <p>Pune, Maharashtra</p>
          <div className="socials">
          <a href="https://www.facebook.com/nitefoodie/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/nitefoodie?lang=en" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/nitefoodie-com/about/" class="fa fa-linkedin"></a>
          </div>

          <p><a href="http://www.nitefoodie.com/?utm_source=cutshort&utm_medium=company_page">nitefoodie.com</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>095890 49605</p>
          <p>20 November, 2015</p>
          <p>2014</p>
          <p>60 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
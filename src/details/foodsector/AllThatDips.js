import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function AllThatDips() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/All_That_Dips/pic2_atd.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/All_That_Dips/logo_atd.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>All That Dips</h1>
      </div>
      <div className="box">
        <p>Provides unique dips that are gluten free, have no MSG, no preservatives and have the unique combinations of great flavours from across the globe</p>
        <br></br>
        <p>60% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='60' />
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
          <p>Vadodara, Gujarat</p>
          <div className="socials">
          <a href="https://www.facebook.com/BechefbyAllThatDips/ " class="fa fa-facebook"></a>
          <a href="https://twitter.com/allthatdips?lang=en " class="fa fa-twitter"></a>
          <a href="https://in.linkedin.com/company/all-that-dips" class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.allthatdips.com/">allthatdips.com</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>090990 30405</p>
          <p>10 June 2019</p>
          <p>Mar 7, 2017</p>
          <p>80 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
 


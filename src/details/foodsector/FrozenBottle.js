import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";
import { Link } from "react-router-dom";
export default function FrozenBottle() {
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Food_and_beverages_sector/Frozen_Bottle/pic4_fb.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Food_and_beverages_sector/Frozen_Bottle/logo_fb.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Frozen Bottle</h1>
      </div>
      <div className="box-new">
        <p>Provides a wide variety of products namely thick Milkshakes, knockout Scoops, Cake jars, Stone jars, Waffle sandwiches, Waffle sticks, Ice cream pizza and Sundaes.</p>
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
          <p>Hyderabad, Telangana</p>
          <div className="socials">
          <a href="https://www.facebook.com/FrozenBottle/ " class="fa fa-facebook"></a>
          <a href="https://twitter.com/frozen_bottle?lang=en " class="fa fa-twitter"></a>
          <a href="https://in.linkedin.com/company/frozen-bottle " class="fa fa-linkedin"></a>
          </div>

          <p><a href=" https://www.frozenbottle.in/">frozenbottle.in</a></p>
          <div class="CategoryLabel">Food & Beverages</div>
          <p>+9180 4866 9920</p>
          <p>10 January 2018</p>
          <p>2017</p>
          <p>75 lakhs</p>
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
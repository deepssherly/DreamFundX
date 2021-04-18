import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";
import { Link } from "react-router-dom";
export default function Kredx(){
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/Kredx/banner.jpg" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/Kredx/Kredx_image.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Kredx</h1>
      </div>
      <div className="box-new">
        <p> KredX is India’s first invoice discounting marketplace platform. It helps businesses gain quick access to working capital in around 24 to 72 hours by selling their unpaid receivables </p>
        <br></br>
        <p>85% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='85' />
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
          <p>Chennai,TamilNadu</p>
          <div className="socials">
          <a href="https://www.facebook.com/KredxSocial/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/kredxindia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/kredxindia/?originalSubdomain=in " class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.kredx.com/">kredx.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>099378 90112 </p>
          <p>25 March 2016</p>
          <p>September 13,2015</p>
          <p>85 lakhs</p>
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
 


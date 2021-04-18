import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";
import { Link } from "react-router-dom";
export default function Lendingkart(){
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/Lendingkart/images.jfif" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/Lendingkart/logo1.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Lendingkart</h1>
      </div>
      <div className="box-new">
        <p>  Lendingkart is an online financing company founded by Harshvardhan Lunia and Mukul Sachan in 2014. Lendingkart provides loans for working capital needs for SMEs.These loans are quick and collateral-free with minimal paperwork </p>
        <br></br>
        <p>75% raised of total target</p>
        <ProgressBar  bgcolor='#ff6622' completed='75' />
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
          <p>Delhi,India</p>
          <div className="socials">
          <a href="https://www.facebook.com/lendingkart/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/Lendingkart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/lendingkart/?originalSubdomain=in " class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.lendingkart.com/">lendingkart.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>088902 76822 </p>
          <p>26 December 1996</p>
          <p>January 18,1996</p>
          <p>70 lakhs</p>
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
 


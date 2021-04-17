import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function Refrens(){
  return (
    <>
      <DetailsNavbar/>
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/Refrens/Refrens_app_pic.png" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/Refrens/logo2.jpg" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Refrens</h1>
      </div>
      <div className="box">
        <p> Refrens provides a payment gateway system for freelancers to send and receive payments smoothly. It offers free invoicing, payments, and expense management system</p>
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
          <p>Mumbai,Maharastra</p>
          <div className="socials">
          <a href="https://www.facebook.com/refrensApp/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/RefrensApp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/company/refrens/?originalSubdomain=in" class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://www.refrens.com/">refrens.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>0970166 21331 </p>
          <p>12 November 2019</p>
          <p>1 Jan, 2018</p>
          <p>80 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
 


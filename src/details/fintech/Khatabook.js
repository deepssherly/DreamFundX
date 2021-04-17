import React from 'react';
import DetailsNavbar from '../../components/DetailsNavbar';
import '../details.css';
import ProgressBar from "./../../components/details-page-progress-bar.component";

export default function Khatabook(){
  return (
    <>
      <DetailsNavbar />
      <div id="profile-upper">
        <div id="profile-banner-image">
            <img src="images/Fintech_sector/KhataBook/khata.jpg" alt="Banner image"/>
        </div>
        <div id="profile-d">
            <div id="profile-pic">
                <img src="images/Fintech_sector/KhataBook/logo_kb.png" alt="Logo image"/>    
            </div>
        </div>
      </div>
      <div className="container">
        <h1>Khatabook</h1>
      </div>
      <div className="box">
        <p>Khatabook enables micro, small and medium merchants to track business transactions safely and securely. It also offers features such as online payment collection through UPI and QR; sending periodic reminders to creditors via messages and report generation </p>
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
          <p>Bangalore,Karnataka</p>
          <div className="socials">
          <a href="https://www.facebook.com/khatabook" class="fa fa-facebook"></a>
          <a href="https://twitter.com/Khatabook " class="fa fa-twitter"></a>
          <a href="https://in.linkedin.com/company/khatabook " class="fa fa-linkedin"></a>
          </div>

          <p><a href="https://khatabook.com/ ">khatabook.com</a></p>
          <div class="CategoryLabel">Fintech</div>
          <p>096068 00800</p>
          <p>22 January 2019</p>
          <p>October 15, 2018</p>
          <p>90 lakhs</p>
      </div>
      </div>
      </div>
      
    </>

  )
}
 


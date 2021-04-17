import React from "react";
import "../App.css";
import "../css/Home.css";
import "../css/grid.css";
import "../css/normalize.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="hero-container">
        <h1>
          <img
            src="images/Df__logo.png"
            id="title-logo"
            height="90"
            width="100"
            alt="dflogo"
          />{" "}
          DreamFundX
        </h1>
        <p>A CrowdFunding Platform</p>
        <div className="hero-btns">
          <Link to="/getstarted">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </Link>
          <a href="#mission">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              KNOW MORE <i className="far fa-play-circle" />
            </Button>
          </a>
        </div>
      </div>
      <div className="features" id="mission">
        <div className="fill">
          <img src="images/bg1.svg" className="svg-img" alt="bg1" />
          <img src="images/pattern2.svg" className="svg-img" alt="pattern2" />
        </div>
        <div className="row-new">
          <div className="col-new span-1-of-3 box-new">
            <h3>
              <i className="fas fa-book-reader box-new-icon"></i>Our Purpose
            </h3>
            <p>To unlock Human potential for Good</p>
          </div>
          <div className="col-new span-1-of-3 box-new">
            <h3>
              <i className="fas fa-bullseye box-new-icon"></i>Our Mission
            </h3>
            <p>
              To provide greater accountability in crowd funding using
              blockchain-enabled Smart Contracts
            </p>
          </div>
          <div className="col-new span-1-of-3 box-new">
            <h3>
              <i className="fab fa-angellist box-new-icon"></i>Our Vision
            </h3>
            <p>To be the first choice of Micro Enterprises growth in India</p>
          </div>
        </div>
        <div className="fill">
          <img src="images/pattern2.svg" className="svg-img" alt="pattern2" />
          <img src="images/bg1.svg" className="svg-img" alt="bg1" />
        </div>
      </div>
      <section className="section-2">
        <div className="col-new span-1-of-7 col-new-box-1">
          <img
            src="images/images2/number-line-orange2.png"
            className="number-line"
            alt="bg1"
          />
        </div>
        <div className="col-new span-2-of-7 col-new-box-2">
          <div className="box-new-1">
            <div>
              <h3 className="col-new">Register</h3>
            </div>
            <hr />
            <hr />
            <hr />
            <p>
              start by signing up for an account here.<br></br>
              All you need is to sign up,<br></br>
              upload your documents and you are ready to start!
            </p>
          </div>
          <div className="box-new-2">
            <h3>Start Investing</h3>
            <p>
              Once your account is approved,<br></br>
              you can start investing!<br></br>
              Simply Log in to your dashboard<br></br>
              to see the available campaigns
            </p>
          </div>
          <div className="box-new-2">
            <h3>Monitor Your Investment</h3>
            <p>
              You can easily monitor investments via your dashboard<br></br>
              This is also where you can do that funds transfer in or out of
              your account
            </p>
          </div>
          <div className="apply-btn">
            <a href="getstarted">Apply now!</a>
          </div>
        </div>
        <div className="col-new span-1-of-7 vl"></div>
        <div className="col-new span-3-of-7 col-new-box-3">
          <img
            src="images/images2/Numberline2 (2).png"
            className="tree"
            alt="bg1"
          />
          {/* <div className="box-1 bottom-box">
                <h3>Need to speak with someone?</h3>
                <br></br>
                <p><i className="fas fa-phone-alt "></i> call us on xxxxxxx</p>
                <br></br>
                <p><i className="fas fa-mail-bulk"></i> Or email here</p>
            </div> */}
        </div>
      </section>
      <footer className="footer-new">
        <h2>Developed by Team DASH Truffles</h2>
      </footer>

    </>
  );
}

export default Home;

import React from 'react';
import '../App.css';
import '../css/Home.css';
import '../css/grid.css';
import '../css/normalize.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';

function Home() {
  return (
    <>
      <HomeNavbar />
      <div className='hero-container'>
        <h1><img src="images/Df__logo.png" id="title-logo" height="90" width="100" alt="dflogo" /> DreamFundX</h1>
        <p>A CrowdFunding Platform</p>
        <div className='hero-btns'>
          <Link to='/sign-up'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
        </Button>
          </Link>
          <a href='#mission'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              KNOW MORE <i className='far fa-play-circle' />
            </Button>
          </a>
        </div>
      </div>
      <div className='features' id="mission">
        <div className="fill">
          <img src="images/bg1.svg" className="svg-img" alt="bg1" />
          <img src="images/pattern2.svg" className="svg-img" alt="pattern2" />
        </div>
        <div className="row">
          <div className="col span-1-of-3 box">
            <h3>
              <i className="fas fa-book-reader box-icon"></i>Our Purpose
              </h3>
            <p>To unlock Human potential for Good</p>
          </div>
          <div className="col span-1-of-3 box">
            <h3>
              <i className="fas fa-bullseye box-icon"></i>Our Mission
              </h3>
            <p>To provide greater accountability in crowd funding using blockchain-enabled Smart Contracts</p>
          </div>
          <div className="col span-1-of-3 box">
            <h3>
              <i className="fab fa-angellist box-icon"></i>Our Vision
              </h3>
            <p>To be the first choice of Micro Enterprises growth in India</p>
          </div>
        </div>
        <div className="fill">
          <img src="images/pattern2.svg" className="svg-img" alt="pattern2" />
          <img src="images/bg1.svg" className="svg-img" alt="bg1" />
        </div>
      </div>


    </>
  );
}

export default Home;

import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import GenNavbar from '../components/GenNavbar';
import Slideshow from '../components/Slideshow';
import '../css/campaigns.css';

export default function Campaigns() {
    return (
      <>
        <GenNavbar />
        <Slideshow />
        <Cards />
      </>
  
    )
  }

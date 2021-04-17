import React from 'react';
import { Slide } from 'react-slideshow-image';
import './../css/slideshow.css';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'images/slide1.png',
  'images/slide2.jpg',
  'images/slide3.png'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
           
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
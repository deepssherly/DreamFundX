import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from "./progress-bar.component";

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <div className='cards__item__desc'>{props.desc}</div>
            
          </div>
          <div className='cards__item__location'><i class='fas fa-map-marker-alt' style={{color: "#005487"}}></i> {props.location}</div>
          <div className='line'></div>
          <div className='cards__raise__info'>
            <h3 className='cards__raise__text'>Raised <div class="fund-button">Fund</div></h3>
            <h3 className='cards__raise__percent'>{props.completed}% of total target</h3>
          </div>
          <ProgressBar  bgcolor={props.bgcolor} completed={props.completed} />
        </Link>

      </li>
    </>
  );
}

export default CardItem;

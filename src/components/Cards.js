import React from 'react';
import './../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Campaigns and Start Donating</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Food_and_beverages_sector/All_That_Dips/logo_atd.png'
              text='All That Dips'
              label='Food and Beverages'
              path='/allthatdips'
              desc='Provides unique dips that are gluten free, have no MSG, no preservatives and have the unique combinations of great flavours from across the globe'
              location='Vadodara, Gujarat.'
              bgcolor='#ff6622'
              completed='60'
            />
            <CardItem
              src='images/Food_and_beverages_sector/FreshMenu/Freshmenu_logo.jpg'
              text='FreshMenu'
              label='Food and Beverages'
              path='/freshmenu'
              desc='FreshMenu is a Bangalore-based restaurant that offers freshly prepared food from cuisines such as oriental, continental, Italian, Mughlai and others.'
              location='Bangalore, Karnataka.'
              bgcolor='#ff6622'
              completed='50'
            />

            <CardItem
              src='images/Food_and_beverages_sector/Frozen_Bottle/pic3_fb.png'
              text='Frozen Bottle'
              label='Food and Beverages'
              path='/frozenbottle'
              desc='Provides a wide variety of products namely thick Milkshakes, knockout Scoops, Cake jars, Stone jars, Waffle sandwiches, Waffle sticks, Ice cream pizza and Sundaes.'
              location='Hyderabad, Telangana.'
              bgcolor='#ff6622'
              completed='70'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Food_and_beverages_sector/HungerBox/HungerBox_image.jpg'
              text='HungerBox'
              label='Food and Beverages'
              path='/hungerbox'
              desc='HungerBox is a B2B food-tech startup founded by Sandipan Mitra in 2007. The startup is a full-stack B2B and F&B (food and beverage) technology venture and delivers food solutions for corporate clients.'
              location='Bangalore, Karnataka.'
              bgcolor='#ff6622'
              completed='75'
            />
            <CardItem
              src='images/Food_and_beverages_sector/NiteFoodie/Nitefoodie_image.jpg'
              text='NiteFoodie'
              label='Food and Beverages'
              path='/nitefoodie'
              desc='NiteFoodie is a fast growing startup focused on providing Night Time Convenience be it food, meds, utilities or munchies.NiteFoodie powers consistency in availability of all items, like its a day!'
              location='Pune, Maharashtra.'
              bgcolor='#ff6622'
              completed='40'
            />
            <CardItem
              src='images/Food_and_beverages_sector/Osome_Foods/logo_osm.png'
              text='Osome Foods'
              label='Food and Beverages'
              path='/osomefoods'
              desc='Osome provide alternative healthy snacking option for modern lifestyle.We follow basic and traditional process so that we can be sure that everything we make should be nearest to mother nature.'
              location='Rajkot, Gujarat.'
              bgcolor='#ff6622'
              completed='80'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import './../css/Cards.css';
import CardItem from './CardItem';

function CardsFintech() {
    return ( <
        div className = 'cards' >
        <
        h1 > Check out these Campaigns and Start Donating < /h1> <
        div className = 'cards__container' >
        <
        div className = 'cards__wrapper' >
        <
        ul className = 'cards__items' >
        <
        CardItem src = 'images/Fintech_sector/Finly/logo_finly.png'
        text = 'Finly'
        label = 'Fintech'
        path = '/finly'
        desc = ' Finly is designed to simplify business spend and expense management by providing finance teams with tools and data to get a better insight into their spend.'
        location = 'Bangalore, Karnataka'
        bgcolor = '#ff6622'
        completed = '70' /
        >
        <
        CardItem src = 'images/Fintech_sector/Refrens/Refrens_image.jpg'
        text = 'Refrens'
        label = 'Fintech'
        path = '/refrens'
        desc = ' Refrens provides a payment gateway system for freelancers to send and receive payments smoothly. It offers free invoicing, payments, and expense management system.'
        location = 'Mumbai,Maharastra'
        bgcolor = '#ff6622'
        completed = '60' /
        >

        <
        CardItem src = 'images/Fintech_sector/Kredx/Kredx_image.png'
        text = 'Kredx'
        label = 'Fintech'
        path = '/kredx'
        desc = ' KredX is India’s first invoice discounting marketplace platform. It helps businesses gain quick access to working capital in around 24 to 72 hours by selling their unpaid receivables.'
        location = 'Chennai,TamilNadu'
        bgcolor = '#ff6622'
        completed = '85' /
        >
        <
        /ul> <
        ul className = 'cards__items' >
        <
        CardItem src = 'images/Fintech_sector/Instamojo/logo_im.png'
        text = 'Instamojo'
        label = 'Fintech'
        path = '/instamojo'
        desc = ' Instamojo is a full-stack transactional platform aimed at bringing small business online. With transactions being a key part of every business, we pioneered Payment Links in India, an easy to start and easy to integrate payment solution.'
        location = 'Hyderabad,Telangana'
        bgcolor = '#ff6622'
        completed = '80' /
        >
        <
        CardItem src = 'images/Fintech_sector/Lendingkart/lendingkart_image.jpg'
        text = 'Lendingkart'
        label = 'Fintech'
        path = '/lendingkart'
        desc = ' Lendingkart is an online financing company founded by Harshvardhan Lunia and Mukul Sachan in 2014. Lendingkart provides loans for working capital needs for SMEs.These loans are quick and collateral-free with minimal paperwork.'
        location = 'Delhi,India'
        bgcolor = '#ff6622'
        completed = '75' /
        >
        <
        CardItem src = 'images/Fintech_sector/KhataBook/logo_kb.png'
        text = 'KhataBook'
        label = 'Fintech'
        path = '/khatabook'
        desc = ' Khatabook enables micro, small and medium merchants to track business transactions safely and securely. It also offers features such as online payment collection through UPI and QR; sending periodic reminders to creditors via messages and report generation.'
        location = 'Bangalore, Karnataka'
        bgcolor = '#ff6622'
        completed = '50' /
        >

        <
        /ul> < /
        div > <
        /div> < /
        div >
    );
}

export default CardsFintech;
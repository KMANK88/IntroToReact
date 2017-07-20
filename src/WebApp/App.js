import React from 'react';
import NavBar from './NavBar';
import Section from './Section';
import Jumbotron from './Jumbotron';


const WebApp = () => {
  return(
    <div className="app-container">
    <NavBar navLinks={["Home","About","Contract","Blog"]} />
    <Jumbotron header="🍞 Super Duper Web App  🍞" />
    <Section itemName="Razer mouse" />
    <Section itemDiscription="Free Razer mouse with any puchase of Razer Keyboard" />
    <Section img={"https://images-na.ssl-images-amazon.com/images/I/81uAH2a2ZnL._SL1500_.jpg"} />
    </div>
  )
}

export default WebApp;

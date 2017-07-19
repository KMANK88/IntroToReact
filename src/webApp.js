import React from 'react';

const NavBar = (props) => {
return(
  <nav className="nav">
    <ul className="nav-item-container">
      {
        props.navLinks.map(function(item, index){
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  </nav>
 )
}
const Jumbotron = (props) => {
  return(
    <div className="jumbotron">
      <h3> {props.header} </h3>
      <p> I built this with react</p>
    </div>
  )
}

const Product = (props) => {
  return(
    <div className="product">
      <h2>{props.itemName}</h2>
      <p>{props.itemDiscription}</p>

    </div>
  )
}
const WebApp = () => {
  return(
    <div className="app-container">
    <NavBar navLinks={["Home","About","Contract","Blog"]} />
    <Jumbotron header="🍞 Super Duper Web App  🍞" />
    <Product itemName="Razer mouse" />
    <Product itemDiscription="Free Razer mouse with any puchase of Razer Keyboard" />
    </div>
  )
}

export default WebApp;

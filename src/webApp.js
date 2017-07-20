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
      <img className='myImg' src={props.img} />

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
    <Product img={"https://images-na.ssl-images-amazon.com/images/I/81uAH2a2ZnL._SL1500_.jpg"} />
    </div>
  )
}

export default WebApp;

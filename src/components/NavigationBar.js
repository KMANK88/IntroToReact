import React from 'react';
import{Link} from 'react-router-dom';

const NavigationBar = () => {
   return(
    <div>
      <ul className='nav-item-container'>
        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/i-do-what-i-want"> Super App </Link></li>
        <li> <Link to="/fake-chat"> ChatApp </Link></li>
        <li> <Link to="/Homework-stuff">Homework Info</Link></li>
        <li> <Link to="/playground"> Playground </Link></li>
      </ul>
    </div>
  )
}

export default NavigationBar;

 import React from 'react';
 import ReactDOM from 'react-dom';
 import './style.css';
 import WebApp from'./webApp';
 import Data from'./Data';
 import MappingAndFiltering from'./MappingAndFiltering';


ReactDOM.render(
  <MappingAndFiltering
  title={"Maps woo woo!"} allTheData={Data}
  />, document.getElementById('root'));

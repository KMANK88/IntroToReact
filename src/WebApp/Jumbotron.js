import React from 'react';

const Jumbotron = (props) => {
  return(
    <div className="jumbotron">
      <h3> {props.header} </h3>
      <p> I built this with react</p>
    </div>
  )
}

export default Jumbotron;

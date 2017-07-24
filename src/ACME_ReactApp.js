import React from 'react';
import info from './info';


const ReactApp = () => {
  const Customers = info.customers.map(function(data){
    return(
      <div>
      <p>{data.name}</p>
      <b>{data.email}</b>
      <img src={data.img} />
      </div>
    )
  })
  return(
    <div className="homework-data">
      <h3> UserNames and Emails</h3>
    {Customers}
    </div>
  )

}


export default ReactApp;

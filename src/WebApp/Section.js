import React from 'react';
const Product = (props) => {
  return(
    <div className="product">
      <h2>{props.itemName}</h2>
      <p>{props.itemDiscription}</p>
      <img className='myImg' src={props.img} />

    </div>
  )
}

export default Product;

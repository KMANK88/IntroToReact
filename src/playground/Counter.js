import React from 'react';

const Counter = (props) => {
  return(
    <div>
        <p> counter: {props.counter}</p>
          <button onClick={
            () => props.increaseCount()}> Increase Counter </button>
          <button onClick={
            () => props.decreaseCount()}> Decrese Counter </button>

    </div>
  )
}

export default Counter;

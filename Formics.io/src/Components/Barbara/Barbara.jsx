import React from 'react'
import Dawn from './Dawn/Dawn';
import Emre from './Emre/Emre';
import { useState } from 'react';
import Carlos from '../Carlos/Carlos';

const Barbara = (props) => {

  const [count, setCount] = useState(0);
  
  // const handleIncrement = (index) => {
  //   setCount((prevCounters) => {
  //     const newCounters = [...prevCounters];
  //     newCounters[index] = newCounters[index] + 1;
  //     return newCounters;
  //   });
  // };

  // const handleDecrement = (index) => {
  //   setCount((prevCounters) => {
  //     const newCounters = [...prevCounters];
  //     newCounters[index] = newCounters[index] - 1;
  //     return newCounters;
  //   });
  // };


  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };


  return (
    <>
      <div className="flex items-center space-x-4 ">
        <span className="text-xl font-bold">Counter</span>
        <span className="text-2xl font-bold">{props.counter}</span>
        <div className="flex">
          <Dawn onIncrement={handleIncrement}/>
          <Carlos count={count}/>
          <Emre onDecrement={handleDecrement}/>
        </div>
      </div>

    </>
  )
}

export default Barbara;

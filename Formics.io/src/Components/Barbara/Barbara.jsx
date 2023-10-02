import React from 'react'
import Dawn from './Dawn/Dawn';
import Emre from './Emre/Emre';
import { useState } from 'react';

const Barbara = (props) => {

  const [count, setCount] = useState(1);
  
  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <div className="flex items-center space-x-4 ">
        <span className="text-xl font-bold">Counter</span>
        <span className="text-2xl font-bold">{props.counter}</span>
        <div className="flex">
          <Dawn setCount={handleCountChange}/>
            <span className="text-lg font-bold bg-gray-500 px-4">{count}</span>
          <Emre setCount={handleCountChange}/>
        </div>
      </div>

    </>
  )
}

export default Barbara;

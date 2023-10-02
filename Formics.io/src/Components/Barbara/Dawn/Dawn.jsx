import React, { useState } from 'react'

const Dawn = (props) => {

  const [count, setCount] = useState(1)

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    props.setCount(newCount);
  }
  return (
    <div>
      <div className='p-1 bg-gray-200 rounded-lg'>
        <button onClick={handleIncrease}>➕</button>
      </div>
    </div>
  )
}

export default Dawn;

import React, { useState } from 'react'

const Emre = (props) => {

  const [count, setCount] = useState(1)

  const handleDecrease = () => {
    const newCount = count - 1
    setCount(newCount)
    props.setCount(newCount)
  }
  return (
    <div>
      <div className='p-1 bg-gray-200 rounded-lg'>
        <button onClick={handleDecrease}>➖</button>
      </div>
    </div>
  )
}

export default Emre

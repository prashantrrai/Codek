import React from 'react'

const Emre = ({onDecrement}) => {

  return (
    <div>
      <div className='p-1 bg-gray-200 rounded-lg'>
        <button onClick={onDecrement}>➖</button>
      </div>
    </div>
  )
}

export default Emre

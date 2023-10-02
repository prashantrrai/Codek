import React from 'react'

const Dawn = ({ onIncrement }) => {

  return (
    <div>
      <div className='p-1 bg-gray-200 rounded-lg'>
        <button onClick={onIncrement}>➕</button>
      </div>
    </div>
  )
}

export default Dawn;

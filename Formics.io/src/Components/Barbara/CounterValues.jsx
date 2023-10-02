import React from 'react'

const CounterValues = (prop) => {
    return (
        <div>
            {prop.counters.map((count, index) => (
                <p key={index}>Counter {index + 1}: {prop.count}</p>
            ))}
        </div>
    )
}

export default CounterValues

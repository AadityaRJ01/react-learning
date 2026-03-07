import React, { useState } from 'react'

const StateExample = () => {

    const [count, setCount] = useState(0);
    const increaseCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increaseCount}>Increase counter</button>
    </div>
  )
}

export default StateExample
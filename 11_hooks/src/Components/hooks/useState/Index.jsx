import React from 'react'
import { useState } from 'react'

export default function Index() {
    const [count, setCount] = useState(0);
  return (
    <div className='container state-container' style={{textAlign:"center"}}>
        <h1>useState Hook</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

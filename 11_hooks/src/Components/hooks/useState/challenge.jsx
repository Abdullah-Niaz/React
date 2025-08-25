import React from 'react'
import { useState } from 'react'

export default function Challenge() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
   <div className='container state-container' style={{textAlign:"center"}}>
        <h1>useState Hook</h1>
        <p>{count}</p>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <button onClick={()=>setCount(count + step)}>Increment</button>
    </div>
  )
}

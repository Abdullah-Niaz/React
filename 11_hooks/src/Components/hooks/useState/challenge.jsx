import React from 'react'

export default function challenge() {
  return (
   <div className='container state-container' style={{textAlign:"center"}}>
        <h1>useState Hook</h1>
        <p>{count}</p>
        <input type="text" onClick={} />
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

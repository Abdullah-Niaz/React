import React from 'react'

export default function () {

    const handleButtonClick = (event)=>{
        console.log(event)
        alert("Button Clicked")
    }
  return (
    <div>
        <button onClick={handleButtonClick}>
            Click Me
        </button>
    </div>
  )
}

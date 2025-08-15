import { useState } from 'react'
import './App.css'

function App() {

  const handleParentClick = () => {
    console.log("Parent Clicked")
  }
  const handleChildClick = () => {
    console.log("Child Clicked")
  }
  return (
    <>
      <h1>Capturing Phase</h1>
      <div onClickCapture={handleParentClick}>
        <button onClickCapture={handleChildClick}>Click Me </button>
      </div>


      {/* bubling phase  */}
      <h1>Bubling Phase</h1>
      <div onClick={handleParentClick}>
        <button onClick={handleChildClick}>Click Me </button>
      </div>
    </>
  )
}

export default App

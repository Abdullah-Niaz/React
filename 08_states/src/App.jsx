import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const handleButtonClickIncrement = () => {
      setCount(count => count+1)
  }

  const handleButtonClickDecrement = () => {
    setCount(count => count -1)
  }
  return (
    <>
     <h1>{count}</h1>
     <button onClick={handleButtonClickIncrement}>Increment</button>
     <button onClick={handleButtonClickDecrement}>Decrement</button>
    </>
  )
}

export default App

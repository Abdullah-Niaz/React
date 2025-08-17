import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const increase = () => {
      setCount(count => count+1);
  }

  const decrease = () => {
    setCount(count => count -1);
  }
  const reset  = ()=> {
    setCount(0);
  }
  return (
   <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React State Counter</h1>
      <h2 style={{ color: count > 0 ? "blue" : "red" }}>
        Count: {count}
      </h2>
      <button onClick={increase} style={btnStyle}>Increase</button>
      <button onClick={decrease} style={btnStyle}>Decrease</button>
      <button onClick={reset} style={btnStyle}>Reset</button>
    </div>
  )
}

export default App


const btnStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer"
};

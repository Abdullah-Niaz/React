import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mainContainer">
        <div className="imageCard">
        <img src="man.avif" alt="" />
        </div>
        <div className="contentCard">
          <h1>Gangland</h1>
          <h3>Rating: 3.8</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut officiis facilis! Quasi voluptatibus ipsa consequatur alias sint a deleniti, nam eius exercitationem consequuntur quidem similique eos sunt quibusdam optio!</p>

        </div>
      </div>
    </>
  )
}

export default App

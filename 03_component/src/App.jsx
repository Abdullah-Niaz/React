import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WellcomeComponent src="1.jpg" name="Gangland" rating="3.5" age="19"/>
    <WellcomeComponent src="1.jpg" name="Gangland 1"rating="3.6" age="15"/>
    <WellcomeComponent src="1.jpg" name="Gangland 2" rating="3.7" age="13"/>
    <WellcomeComponent src="1.jpg" name="Gangland 3" rating="3.8" age="22"/>
    <WellcomeComponent src="1.jpg" name="Gangland 4" rating="3.9" age="16"/>
    <WellcomeComponent src="1.jpg" name="Gangland 5" rating="4" age="30"/>
    </>
  )
}

const WellcomeComponent = (props)=>{
  return (
   <div className="mainContainer">
        <div className="imageCard">
        <img src={props.src} alt="" />
        </div>
        <div className="contentCard">
          <h1>{props.name}</h1>
          <h3>Rating: {props.rating}</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut officiis facilis! Quasi voluptatibus ipsa consequatur alias sint a deleniti, nam eius exercitationem consequuntur quidem similique eos sunt quibusdam optio!</p>
          <button>{props.age > 18 ? "Watch Now" : "Not Avaiable"}</button> You're: <span style={{color: "red", fontStyle:"bold"}} >{props.age}+</span>
        </div>
      </div>
  )
}

export default App

import React from 'react'
import WellcomeUser from './WellcomeUser'

export default function EventProps() {
    const handleWellcomeUser = (user,event)=> {
        console.log(event)
        alert(`Hello , ${user}`)
    }

    const handleHover = () => {
        alert("Hello, Thanks for Hovering Me")
    }
  return (
    <div>
        <WellcomeUser onClick={(event) => handleWellcomeUser("Hamza",event)}
            onMouseOver = {handleHover}
            />
    </div>
  )
}


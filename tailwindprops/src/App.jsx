  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Card from './Card'

  function App() {
    const [count, setCount] = useState(0)
    const person = {
      name : "Abdullah",
      currentStanding: "Software Engineer",
      status : "Single",
      joinedDate : 'Dec-01-2002',
    }
    return (
      <>
      <Card myDetails = {person} info = {person} />
      </>
    )
  }

  export default App

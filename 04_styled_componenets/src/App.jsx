import { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover{
  background-color: #2980b9;
  }
`

function App() {
  const [count, setCount] = useState(0)
  const counter = ()=>{

    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
    setCount(preCount => preCount + 1)
  }
  return (
    <>
     
     
        <StyledButton onClick={counter}>
          count is {count}
        </StyledButton>
        

    </>
  )
}

export default App

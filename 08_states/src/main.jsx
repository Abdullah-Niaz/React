import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ch from './Components/Ch.jsx'
import Derived from './Components/Derived.jsx'
import ExpensiveComponent from './Components/ExpensiveComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ch/> */}
    {/* <Derived/> */}
    <ExpensiveComponent numbers={[1, 2, 3, 4, 5]} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LiftingUP from './LiftingUP.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <LiftingUP/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EventHandler from './Components/EventHandler.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventHandler/>
  </StrictMode>,
)

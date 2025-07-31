import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Series from './Components/Series.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Series/>
    {/* <App /> */}
  </StrictMode>,
)

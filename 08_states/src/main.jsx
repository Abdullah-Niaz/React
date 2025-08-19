import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ch from './Components/Ch.jsx'
import Derived from './Components/Derived.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Ch/> */}
    <Derived/>
  </StrictMode>,
)

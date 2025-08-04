import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Series from './Components/Series.jsx'
import Profile from './Components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Series/>
    {/* <Button/> */}
    {/* <App /> */}
    {/* <Profile/> */}
  </StrictMode>,
)

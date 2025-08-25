import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './Components/hooks/useState/Index.jsx'
import ControlledComponent from './Components/hooks/useState/ControlledComponent.jsx'
import UnControlledComponent from './Components/hooks/useState/UnControlledComponent.jsx'

import Challenge from './Components/hooks/useState/challenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Challenge/> */}
    <Index/>
    {/* <ControlledComponent/>
    <UnControlledComponent/> */}
  </StrictMode>,
)

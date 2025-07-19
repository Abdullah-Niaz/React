import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './nav.jsx'
import Section from './section.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Section/>
    <Footer/>
  </StrictMode>,
)

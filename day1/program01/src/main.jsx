import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import './ronak.jsx'
import Ronak from './ronak.jsx'
import Second from './second.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ronak></Ronak>
    <Second></Second>
  </StrictMode>,
)

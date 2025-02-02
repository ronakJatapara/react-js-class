import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainrouter from './Routes/Mainrouter'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
     <Navbar></Navbar>
     <Mainrouter></Mainrouter>
     <Footer></Footer>
  
  </>
  )
}

export default App

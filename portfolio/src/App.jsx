import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bot from './components/Bot'
import Navbar from './components/Navbar'
import MainRouter from './mainrounter/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar></Navbar>
 <MainRouter></MainRouter>
 <Bot></Bot>
  </>
  )
}

export default App

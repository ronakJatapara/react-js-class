import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Crud from './components/crud'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  
  <Crud></Crud>
 
 </>
  )
}

export default App

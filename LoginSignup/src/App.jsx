import { useState } from 'react'
import './App.css'
import LoginSignup from './components/ls'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <LoginSignup></LoginSignup>
   </>
  )
}

export default App

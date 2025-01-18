import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './components/otp'
import Otp2 from './components/OTP2'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 {/* <Otp></Otp> */}
 <Otp2 />
 </>
  )
}

export default App

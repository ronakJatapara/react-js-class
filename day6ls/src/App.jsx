import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ls from './components/ls'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Ls></Ls>
  </>
  )
}

export default App

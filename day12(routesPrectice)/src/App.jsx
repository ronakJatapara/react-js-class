import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRoutes from './routes/mainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
   <MainRoutes>
    <App/>
   </MainRoutes>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   
   
   </>
  )
}

export default App




const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}
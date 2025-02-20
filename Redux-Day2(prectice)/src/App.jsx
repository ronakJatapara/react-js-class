import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './components/store'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  
  <Provider store={store}>

    <TodoList/>

  </Provider>
 
 </>
  )
}

export default App

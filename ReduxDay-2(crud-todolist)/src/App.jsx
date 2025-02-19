import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import ReduxCrud from './components/ReduxCrud'
import { store } from './components/store'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Provider store={store}>

    <ReduxCrud/>

   </Provider>
   </>
  )
}

export default App

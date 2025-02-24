import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Navbar from './componetns/Navbar'
import { store } from './componetns/store'
import MainRouter from './MainRouter/mainRouter'

function App() {

  return (
<>

<Provider store={store}>
  <Navbar></Navbar>
  <MainRouter></MainRouter>

</Provider>
</>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './component/store'
import ReduxCounter from './component/reduxCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
 <Provider store={store}>
<ReduxCounter></ReduxCounter>
 </Provider>
  )
}

export default App

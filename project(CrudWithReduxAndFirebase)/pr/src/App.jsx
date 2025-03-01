
import { Provider } from 'react-redux'
import './App.css'
import MainRounter from './mainRouter/MainRounter'
import { store } from './components/Store'

function App() {

  return (
    <>
  
<Provider store={store}>
<MainRounter></MainRounter>
</Provider>

    </>
  )
}

export default App

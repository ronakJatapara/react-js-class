// import './App.css'
import Form from './components/form'
import { useState } from 'react'
import Product from './components/product'

function App() {
const[State,setState] =useState(true)

  return (
  <>
  <button id="btn1" onClick={()=>{setState(true)}}>form</button>
  <button id="btn2" onClick={()=>{setState(false)}}>product</button>
  <br /><br />
<Form data={State}/>
  </>
  )
}

export default App

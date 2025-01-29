import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../pages/signup'
import Login from '../pages/login'
import Slider from '../pages/slider'
function Mainrouter() {
  return (
    <>
      <Routes>
        <Route path='/Signup'element={<Signup/>} >Signup</Route>
        <Route path='/Login' element={<Login/>}>Login</Route>
        <Route path='/home' element={<Slider></Slider>}>home</Route>
       
      </Routes>
    </>
  )
}

export default Mainrouter

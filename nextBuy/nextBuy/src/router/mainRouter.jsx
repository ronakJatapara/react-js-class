import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/Signup'

function MainRouter() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>

     </Routes>
    </>
  )
}

export default MainRouter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'

function MainRouter() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

     </Routes>
    </>
  )
}

export default MainRouter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Navbar from '../components/Navbar'


function MainRounter() {
  return (
    <>
      <Routes>

      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/Signin' element={<Signin></Signin>}></Route>
 
      <Route path='/'element={<Navbar></Navbar>}></Route>


      </Routes>
    </>
  )
}

export default MainRounter

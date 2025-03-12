import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Navbar from '../components/Navbar'
// import { Home } from '@mui/icons-material'
import Home from '../components/Home'
import Add from "../components/Add"
import Profile from '../components/Profile'


function MainRounter() {
  return (
    <>
      <Routes>

      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/Signin' element={<Signin></Signin>}></Route>
      <Route path='/' element={<Home></Home>}></Route> 
      <Route path='/add' element={<Add></Add>}></Route>
      <Route path='/profileForm' element={<Profile></Profile>}></Route>
  

      </Routes>
    </>
  )
}

export default MainRounter

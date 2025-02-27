import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../firebase/Signup'
import Signin from '../firebase/Signin'
import Dashboard from '../firebase/dashboard'

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

      </Routes>
    </>
  )
}

export default MainRouter

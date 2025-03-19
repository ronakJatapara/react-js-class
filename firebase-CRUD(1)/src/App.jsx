import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" Component={Signup}></Route>
       <Route path="/Signin" Component={Signin}></Route>
       <Route path="/Dashboard" Component={Dashboard}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
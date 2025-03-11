// import { Home } from '@mui/icons-material'
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import About from '../components/About'
import Skill from '../components/Skill'
import Home from '../components/Home'
import Project from '../components/Project'
import Contact from '../components/Contact'



function MainRouter() {
  return (
    <>
      <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route> 
      <Route path='/skill' element={<Skill></Skill>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

    


      </Routes>
    </>
  )
}

export default MainRouter

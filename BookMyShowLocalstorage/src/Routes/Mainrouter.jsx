import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from '../component/form'
import Home from '../component/home'
import Editform from '../component/Editform'

function Mainrouter() {





  return (
    <>
      <Routes>
     
     <Route path='/form' element={<Form></Form>}></Route>
     <Route path='/' element={<Home></Home>}></Route>
    <Route path='/editform/:id' element={<Editform></Editform>}></Route>

      </Routes>
    </>
  )
}

export default Mainrouter

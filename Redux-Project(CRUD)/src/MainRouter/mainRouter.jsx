

// import { Add } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../componetns/Add'
import Home from '../componetns/home'
import EditForm from '../componetns/editForm'

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path='add' element={<Add></Add>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='edit' element={<EditForm></EditForm>}></Route>
      </Routes>
    </>
  )
}

export default MainRouter

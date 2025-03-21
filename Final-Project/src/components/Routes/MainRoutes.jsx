import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostForm from '../PostForm'
import PostDetails from '../PostDetails'
import PostList from '../PostList'

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/postform' element={<PostForm></PostForm>}></Route>
        <Route path='/postdetails' element={<PostDetails></PostDetails>}></Route>
        <Route path='/' element={<PostList></PostList>}></Route>

      </Routes>
    </>
  )
}

export default MainRoutes

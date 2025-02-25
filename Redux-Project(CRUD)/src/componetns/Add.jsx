   import React, { useState } from 'react'
   import "../css/add.css"
   import Box from '@mui/material/Box';
   import TextField from '@mui/material/TextField';
   import { useDispatch } from 'react-redux';
   import { fetchData } from '../feature/CrudSlice';
import { useNavigate } from 'react-router-dom';

   function Add() {


      const [url,setUrl] =  useState("")
      const [title,setTitle] =  useState("")
      const [price,setPrice] =  useState("")
      const [category,setCategory] =  useState("")
      const [description,setDescription] =  useState("")
      let navigate = useNavigate()


   let dispatch= useDispatch()
   const handleSubmit = (e) =>{
      e.preventDefault()

   let obj = {url,title,price,category,description}
   console.log(obj);

      dispatch(fetchData(obj))

   }


    

   return (
      <>
         

            <div className="container d-flex justify-content-center mt-5" id='main'>
            <form action="" id='form' onSubmit={handleSubmit}>  
               <br />
      <div className="details d-flex justify-content-center align-items-center flex-column">
      <img src="https://www.mastercam.com/wp-content/uploads/2023/09/APlus.jpg" alt=""  id='img1'/>
      <h4 className='text-center'>Product-Form</h4>   
         </div>  
   <br />
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '73ch' } }}noValidateautoComplete="off">
         <TextField id="outlined-basic1" label="URL" variant="outlined" onChange={(e)=> setUrl(e.target.value)} />
         <br /><br />
            </Box>

            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '35.5ch' } }}noValidateautoComplete="off">
            <TextField id="outlined-basic" name="title" label="Title" variant="outlined" onChange={(e)=> setTitle(e.target.value)} />
            <TextField id="outlined-basic" name="price" label="Price" variant="outlined" onChange={(e)=> setPrice(e.target.value)} />
            <br />
            <TextField id="outlined-basic" name="category" label="category" variant="outlined" onChange={(e)=> setCategory(e.target.value)} />
            <TextField id="outlined-basic" name="description" label="Description" variant="outlined" onChange={(e)=> setDescription(e.target.value)} />
            </Box>
      <div className="buttons d-flex justify-content-center mt-4">
      <button id='btn2'>Add Data</button>
      </div>
      

            </form>
            </div>

      </>
   )
   }

   export default Add







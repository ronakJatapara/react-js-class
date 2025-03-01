import React, { useState } from 'react'
import Navbar from './Navbar'
import "../css/add.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css/Signup.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchdata } from '../feature/CrudSlice';

function Add() {


   const [url,SetUrl] = useState("")
   const [title,SetTitle] = useState("")
   const [type,SetType] = useState("")
   const [language,SetLanguage] = useState("")
   const [year,SetYear] = useState("")



   let dispatch = useDispatch()
   let navigate = useNavigate()
    
   const handleSubmit=(e)=>{
        
    e.preventDefault();

    let obj={url,title,type,language,year};

   

    dispatch(fetchdata(obj))
    navigate("/")    


   }



  return (
    <>

    <Navbar />

    <br /><br />

   <div className="dis    flex justify-center items-center">
   <form className="form1 rounded" onSubmit={handleSubmit} style={{boxShadow:"2px 2px 10px gray"}}>

<br /><br />
<h1 className='text-center text-3xl'>Add Your Movie</h1>
<br /><br />
<Box

className='flex content-center items-center'
  component="form"
  sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label=" Movie Url" variant="outlined" onChange={(e)=>SetUrl(e.target.value)} />



</Box>

<Box
  component="form"
  sx={{ '& > :not(style)': { m: 1, width: '38.5ch' } }}
  noValidate
  autoComplete="off"
>
  
<TextField id="outlined-basic" label=" Movie Title" variant="outlined" onChange={(e)=> SetTitle(e.target.value)} />

  <TextField id="outlined-basic" label=" Movie type" variant="outlined" onChange={(e)=> SetType(e.target.value)} />


  <TextField id="outlined-basic" label="Movie Language" variant="outlined" onChange={(e)=>SetLanguage(e.target.value)}/>

<TextField id="outlined-basic" label="Movie Release Year" variant="outlined" onChange={(e)=> SetYear(e.target.value)} />
</Box>



<br />
<button className='bg-blue-500 py-2 px-2 rounded text-white' style={{width:"60%", marginLeft:"20%"}}>Add movie</button>


</form>
   </div>


      
    </>
  )
}

export default Add

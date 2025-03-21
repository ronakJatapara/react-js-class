import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../feature/Slice';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {

   const [url,setUrl] = useState("")
   const [name,setName] = useState("")
   const [price,setPrice] = useState("")


   let dispatch = useDispatch()
  let navigate = useNavigate()




   const handleSubmit = (e) =>{
   
    e.preventDefault();
    let obj ={url,name,price}
    dispatch(fetchData(obj))

    navigate("/")
     
    
        

   }




  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '52ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
    
     
  <div className="container-fluid">
  <div className="row d-flex justify-content-center mt-5" >
    <div className="col-4 ">
      <div className="form ">

      <TextField
          id="outlined-password-input"
          label="URl"
          type="text"
          autoComplete="current-password"
          onChange={(e)=> setUrl(e.target.value)}
          value={url}
          
        />
        <br /><br />
           <TextField
          id="outlined-password-input"
          label="Name"
          type="text"
          autoComplete="current-password"
          onChange={(e)=> setName(e.target.value)}
          value={name}

        />
        <br /><br />
           <TextField
          id="outlined-password-input"
          label="Price"
          type="text"
          autoComplete="current-password"
          onChange={(e)=> setPrice(e.target.value)}
          value={price}

        />

        <button className='btn mt-5' style={{height:"40px" , width:"50%", marginLeft:"25%", backgroundColor:"#1976D2"}} type='submit' >submit</button>
      </div>
    </div>
   </div>
  </div>
        
       
      </div>

 
    </Box>
  );
}
  



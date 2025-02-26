import  React , {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./form.css"
// import { useState } from 'react';
import { v4 } from 'uuid';
import Nav from './navbar';

 function BasicTextFields() {
   
    const [state,setState] = useState({
        
        img: "",
        title: "",
        price:"",
        id : v4()

    })

    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])

    const handleChange = (e) =>{
        const {name,value} = e.target
        setState({...state,[name]:value})
    }

    const handleSubmit = (e) =>{
     e.preventDefault();
     setArr([...arr, state])
     console.log(arr);
     
     setState({
      img: "",
      title: "",
      price:"",
      id : v4()

     })

     console.log(arr);
    }

    
    

    useEffect(()=>{
    //  localStorage.setItem("data",JSON.stringify(Arr))
    localStorage.setItem("data",JSON.stringify(arr))

    },[arr])


    

    
    

  return (
   <>
    <Nav></Nav>

    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
      id='form'
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" value={state.img} name='img' label="img" variant="outlined"  onChange={handleChange} />
      <br />

      <TextField id="outlined-basic" value={state.title} name='title' label="title" variant="outlined" onChange={handleChange} />
      <br />
      <TextField id="outlined-basic" value={state.price} name='price' label="price" variant="outlined" onChange={handleChange} />
      <br />
      <br />

      {/* <button type='button' id='btn1'>submit</button> */}
      <input type="submit" name="" id="btn1" />

   
    </Box>
   </>
  );
}


export default BasicTextFields;




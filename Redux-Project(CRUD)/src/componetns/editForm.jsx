import React, { useEffect, useState } from 'react'
import "../css/add.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { editData, fetchAllData } from '../feature/CrudSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


function EditForm() {

   const {id} = useParams();
   const dataList = useSelector((state)=>{
        return state.crudSlice
     })
     
     let dispatch =  useDispatch()
     let navigate = useNavigate()

     const single_data = useLocation();
     console.log(single_data);

    const [formData,setFormData] = useState({
      id :single_data.state.id,
    url :single_data.state.url,
    title: single_data.state.title,
    price: single_data.state.price,
    category: single_data.state.category,
    description: single_data.state.description,

 }) 





 const handleChange = (e) =>{ 
     const {name,value} = e.target;
     setFormData({...formData,[name]:value })
     
 }
 const handleSubmit = (e)=>{
    e.preventDefault();
   //  dispatch(editData({formData}))

   dispatch(editData({formData }));

    navigate("/")
    
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
         <TextField id="outlined-basic1" label="URL" variant="outlined" name='url' value={formData.url} onChange={handleChange} />
         <br /><br />
            </Box>

            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '35.5ch' } }}noValidateautoComplete="off">
            <TextField id="outlined-basic" name="title" label="Title" variant="outlined"  value={formData.title} onChange={handleChange} />
            <TextField id="outlined-basic" name="price" label="Price" variant="outlined" value={formData.price} onChange={handleChange} />
            <br />
            <TextField id="outlined-basic" name="category" label="category" variant="outlined" value={formData.category} onChange={handleChange} />
            <TextField id="outlined-basic" name="description" label="Description" variant="outlined" value={formData.description} onChange={handleChange} />
            </Box>
      <div className="buttons d-flex justify-content-center mt-4">
      <button id='btn2'>Add Data</button>
      </div>
      

            </form>
            </div>
    </>
  )
}

export default EditForm
   
// 

// 
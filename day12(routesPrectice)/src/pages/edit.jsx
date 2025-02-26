import  React , {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

function Edit() {

    const [data,setData ] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const dat = useParams();



    const [state,setState] =  useState({


    })

    useEffect(()=>{
       const a = data.filter((el)=>{
                return el.id ==dat.id
        })
        setState(a[0])
        
    },[])
    

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[data])
    


    console.log(data);

   const handleChange=(e)=>{
    const{name,value} = e.target
    setState({...state,[name]:value})
   }
    const handleSubmit= (e)=>{
      e.preventDefault();
      // setData({...state,data})
      let a =data.map((el)=>{
        if(el.id == dat.id)
        {
          return state
        }
        else{
          return el
        }
      })
      setData(a)

  setState({
    
    img:"",
    title:"",
    price:"",
    id:""
  })

    }
    
    
  return (
   <>
   
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
  )
}

export default Edit

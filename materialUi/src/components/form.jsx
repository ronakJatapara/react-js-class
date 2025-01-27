import React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./form.css"

 function MultilineTextFields(show) {

   const [state,setState] = useState({

     name:"",
     email:"",
     password:"",
     skill:[""]
   })

   const handleAdd=()=>{
    setState({...state,skill:[...state.skill,""]})
   }

   const handleChange = (e)=>{
     const {name,value} = e.target;
     setState({...state,[name]:value})
     
   }
   
   const  handleSkill=(e,ind)=>{

    const arr = [...state.skill];
    arr[ind] = e.target.value;
    setState({...state,skill:arr})

   }

   const handleDelete=(e,ind)=>{
     handleSkill(e,ind)
    const arr = [...state.skill]
    // let d = arr.filter((el,i)=>i!=ind);
    arr.splice(ind,1)
    setState({...state,skill:arr})
    // arr.splice(ind,1)
    // console.log(arr)
    
    
   }
   
   const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(state);

    
     
   }


   

  return (
    <>

    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}noValidate autoComplete="off" id='form' onSubmit={handleSubmit}>

        <TextField id="standard-multiline-flexible"  label="Name" name='name' multiline maxRows={4} variant="standard" onChange={handleChange}/>
        <TextField id="standard-multiline-flexible"  label="Email" name='email' multiline maxRows={4} variant="standard" onChange={handleChange}/>
        <TextField id="standard-multiline-flexible"  label="Password" name='password' multiline maxRows={4} variant="standard" onChange={handleChange}/>
        <br /><br />

        {/* dynamic values  */}

        {
          state.skill.map((el,ind)=>{
            return<>
  
            <div className="box">

            <TextField id="standard-multiline-flexible" value={el} className='skills'  label="skill" name='name'  multiline maxRows={4} variant="standard" onChange={(e)=>handleSkill(e,ind)} />
            { state.skill.length>1 ? (<button type='button'   id='btn3' onClick={(e)=>handleDelete(e,ind)}><i className="fa-solid fa-trash"></i></button>):""}

            </div>             
            </>
          })
        }

     <div className="btnAdd">
           <button  type="button" id='btn2' onClick={handleAdd}> Add+</button>
    </div>

        <br /><br />

    <button type='submit' id='btn1'>Submit</button> 
      
    </Box>





    </>
  );
}



export default MultilineTextFields ;



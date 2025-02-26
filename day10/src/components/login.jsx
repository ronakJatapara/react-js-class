import React, { useState } from "react";



function Login()
{

    const [state,setState] = useState({
     
            name:"",
            email:"",
            pass: "",
            skill : [""]
        
    })


    const handleAdd = () =>{
        setState({...state,skill:[...state.skill,""]})
    }
    const handleChange = (e) =>{
        const {name,value} = e.target

        if(isNaN(name))
        {
            setState({...state,[name] : value})
        }
        else{
            let arr = [...state.skill]
            arr[name] = value
            setState({...state,skill : arr})
        }
    }


    

    const handleDelete = (ind) => {
        
     let NewData = [...state.skill]

     NewData.splice(ind,1)
     
    setState({...state,skill:NewData})
    
    

    }




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( state);
      };




    return(
        <>
    


    <form action="" onSubmit={handleSubmit} >
    <input type="text" name="name" id=""onChange={handleChange}  />
   <input type="text" name="email" id=""onChange={handleChange}  />
   <input type="text" name="pass" id="" onChange={handleChange} />
   <input type="button" value={"add"} name="" id="" onClick={handleAdd} />


   {
      state.skill.map((el,ind)=>{
        return <>
        <input type="text" name={ind} placeholder="skills" id="" onChange={handleChange} />
        <input type="submit" value={"delete"} name="ind" id="" onClick={()=>handleDelete(ind)} />
        </>
      })
   }
   <br />

  
  <input type="submit" name="" value={"submit"} id="" />

    </form>

   

        </>
    )
}



export default Login

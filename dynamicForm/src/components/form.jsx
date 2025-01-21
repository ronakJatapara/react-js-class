import React, { useState } from "react";


function Form()
{
    const[state,setState] =useState({
       email:"",
       password:"",
       skill:[""]
    })

    const handleAdd =()=>{
        setState({...state,skill:[...state.skill,""]})
    }

    const handleChange = (e) =>{

        const {name,value} = e.target;
       
        setState({...state,[name] : value})
       
        

        
    }


    const handleSkill = (e,ind) =>{
        let arr = [...state.skill];
        arr[ind] = e.target.value;
        setState({...state,skill:arr})


    }

  const handleDelete = (ind) =>{
    
    console.log(ind);
    
    let arr = [...state.skill]
    arr.splice(ind,1)
    setState({...state,skill:arr})

  }

  console.log(state);
  
    return(
        <>
        
    
    <form action="">
        <input type="text" name="email"  placeholder="email"  onChange={handleChange} />
        <input type="text" name="password"  placeholder="password"  onChange={handleChange} />
        <input type="button" value={"add"} name="" id="" onClick={handleAdd}  />
        <br />


        {
            state.skill.map((el,ind)=>{
                return<>
                <input type="text" placeholder="skill"  name="skill"  onClick={(e)=>handleSkill(e,ind)} />
               {state.skill.length >1 ? <input type="button"   onClick={()=>handleDelete(ind,name)} value={"delete"} /> : ""}
                </>
            })
        }

    </form>

     

        </>
    )
}


export default Form




import React, { useEffect, useState } from 'react'
import "./form.css"
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'



function Form() {


    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [type,setType] = useState("")
    const [Arr,setArr] = useState(  JSON.parse(localStorage.getItem("data")) || [])
    const navigate = useNavigate()






    const handleSubmit = (e) =>{
        e.preventDefault();
      
       let obj={id:Date.now() ,image, name,type}
       setArr([...Arr,obj])
     
      localStorage.setItem("data" , JSON.stringify([...Arr,obj]) )
    navigate("/")
    }


  





  return (
    <>


<div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center">
        
        <div className="col-8 border d-flex justify-content-center align-items-center mt-5">


        <form action="" id='form' onSubmit={handleSubmit}>     
<input type="text" name="" id="inp1" value={image} placeholder='Movie Image' onChange={(e)=>{setImage(e.target.value)}} />
<br />
<br />
<input type="text" name="" id="inp2" value={name} placeholder='Movie Name' onChange={(e)=>{setName(e.target.value)}}  />
<br /><br />
<input type="text" name="" id="inp3" value={type} placeholder='Type' onChange={(e)=>{setType(e.target.value)}} />
<br /><br />

<input type="submit" value={"submit"} name="" id="" />


        </form>
        </div>
    </div>
</div>

    </>
  )
}

export default Form

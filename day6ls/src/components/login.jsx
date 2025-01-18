import React, { useState } from "react";

function Login({Arr})
{
    console.log(Arr);
    const[obj,setObj] =useState({
        Email: "",
        password:""
    })

   let a = Arr.map((el)=> el.Email == email)

    if(a[0].Email != email)
    {
        alert("wrong")
    }
    else{
        alert("right")
    }
    return(
        <div>
         
            
            <form action="">
                <input type="text" name="email" id="" />
                <input type="text" name="Password" id="" />
                <input type="submit" name="" id="" />
            </form>


        </div>
      
    )
}



export default Login;
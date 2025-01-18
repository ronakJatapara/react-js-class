import React , {useState} from "react";


function Signup({InputValue,SubmitValue})
{
   

    return(
        <>
        
         <form action="" onSubmit={SubmitValue}>
            <br />
            <input type="text" name="user" id="" placeholder="username"  onChange={InputValue} />
            <br /><br />
            <input type="text" name="email" id="" placeholder="email"  onChange={InputValue} />
            <br /><br />
            <input type="text" name="pass" id="" placeholder="password" onChange={InputValue} />
            <br />
            <input type="submit" name="" id="" />

         </form>
        </>
    )
}



export default Signup
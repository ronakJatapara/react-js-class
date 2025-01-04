import React, { useState } from 'react'





function LoginSignup()
{

    const [State,setState] =useState(true)

    return(
 <>
 


{State == true ?<div id="login">
    <h1>login</h1>
    <input type="text" name="" id="" />
    <input type="text" name="" id="" />
    <input type="submit" name="" id="" />
    <p onClick={()=>{setState(false)}}>login</p>
</div> :
<div id="signup">
<h1>signup</h1>

    <input type="text" name="" id="" />
    <input type="text" name="" id="" />
    <input type="text" name="" id="" />
    <input type="submit" name="" id="" />
    <p onClick={()=>{setState(true)}}>signup</p>
</div>}

 </>
    )
}


export default LoginSignup
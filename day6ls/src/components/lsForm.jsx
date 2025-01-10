import React  from "react";


function LsForm({InputValue})
{
    return(
      <div>

       <form action="">

        <input type="text" name="user" id="" placeholder="username" onClick={InputValue} />
        <input type="text" name="email" id=""  placeholder="email" onClick={InputValue}/>
        <input type="text" name="price" id=""  placeholder="password" onClick={InputValue}/>
       </form>

      </div>
    )
}


export default LsForm
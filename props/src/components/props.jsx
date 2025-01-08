import React , {useState} from "react";
import New from "./new";

function Add(props) 
// aapne function ma game te perameter aapi sakiye chhiye 


{
// console.log(props.name);
  const [name,setName] = useState(true)
  const [name1,setName1] = useState("ronak")


   return(
    <>
    {name == true ? <h1 onClick={()=>{setName(false)}}>hii {props.other.name} </h1>:

    <h1 onClick={()=>{setName(true)}}>hii {props.other.Name}</h1>}
    {/* <h2>hii{name}</h2> */}


    <button onClick={()=>{}}>change</button>
    


    </>
   )
}

export default Add





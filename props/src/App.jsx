import Add from "./components/props"
import React , {useState} from "react"
import New from "./components/new"

function App() {

  // const [name,setName] = useState(true)



  return (
   <>
    <Add other={{name : "ronak" , Name:"anil" }} ></Add>
    {/* <Add Name={"mohit"}></Add> */}

    {/* 
    1) pela aapne function ne jya call karaviye tya ek value pass karvani tane game nam aapi devanu ane teni andar aapne game te value aapi sakiye chhiye

    ---- second step in props.jsx page ----
    
    */}

    {/* <button onClick={()=>{setName(true)}}>Update Name</button> */}


    {/* <Add data={} /> */}


   </>
  )
}

export default App

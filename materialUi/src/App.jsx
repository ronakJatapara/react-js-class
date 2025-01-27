import React , {useState} from 'react'
import './App.css'
import MultilineTextFields from './components/form'
import Details from './components/details';

function App() {
 

  const [swi,setSwi] = useState(true);
    
  return(
      <>
      



      <button onClick={()=>setSwi(true)}>form</button>
      <button onClick={()=>setSwi(false)}>show</button>
       
             { swi == true ? <MultilineTextFields ></MultilineTextFields>:
              <Details  ></Details>}
       
      
      </>
  )
}

export default App

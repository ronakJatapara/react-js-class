import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[arr,setArr] =useState([])
   const[data,setData] = useState("") 


  useEffect(()=>{
     

     fetch(`https://dummyjson.com/products`)
     .then((res)=> res.json())
     .then((res)=>{
      console.log(res.products);
      setData(res.products)

      
     })
     .catch((err)=>{
      console.log(err);
      
     })

  },[])

 




  return (
    <>
  

      <div className="row">
      {
       data ? data.map((el)=>{
          return <div className="col-3 mt-2" id='main'>
    
    <div className="box">
      <div className="img">
        <img src={el.thumbnail} alt="" />
      </div>
      <div className="text text-center">
        <p>{el.title}</p>
        <p>{el.price}</p>
        <button id='btn1'>Add to Cart</button>

      </div>
    </div>

          </div>
          
        }): <h1>loading</h1>
      }
      

              

     </div>

    </>
  )
}

export default App






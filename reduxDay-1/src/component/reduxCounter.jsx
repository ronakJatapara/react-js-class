  import React from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { decrement, handleDelete, increment } from '../feature/slice'

  export default function ReduxCounter() {

      const {count,name} = useSelector((state)=> state.counterReducer)
      const dispatch = useDispatch()



    return (
      <div>
        <h1>redux-Counter</h1>
        <h3>{count}</h3>
        
          
          
            <font>{name}</font> 
            { name? <button className='' style={{marginLeft:"10px"}} onClick={() => dispatch(handleDelete())}>delete-name</button>: <p>no use</p>}
      
      


        <br /><br />
        
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>







      </div>
    )
  }

  // export default ReduxCounter

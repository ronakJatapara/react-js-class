import React from 'react'
import { useSelector } from 'react-redux'

 export default function ReduxCounter() {

    const count = useSelector((state)=> state.counterReducer.count)



  return (
    <div>
      <h1>redux-Counter</h1>
      <h3>{count.count}</h3>


    </div>
  )
}

// export default ReduxCounter

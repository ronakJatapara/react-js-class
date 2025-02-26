import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {fetchApi}  from '../feature/ApiSlice'

function ReduxApi() {



  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchApi())
  },[])



  const record = useSelector((state)=>{
    return state.ApiReducer
  })


  if(record.loading == true)
  {
    return <p>loading......</p>
  }

  return (
    <>
   {
    
    record.data && record.data.map((el,i)=>{
        return <ul key={i}>
            <li>{el.title}</li>
        </ul>
    })
    
   }
    </>
  )
}

export default ReduxApi

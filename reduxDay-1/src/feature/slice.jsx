import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0, name:"rahul"},
    reducers:{
        increment:(state,action)=>{
          
          if(state.name=="")
          {
            alert("can't increase")
          }
          else{
            state.count +=1;

          }


        },
        decrement:(state,action)=>{


            if(state.count >0)
            {
                state.count -=1;

            }
            else{
                alert("can't be nagative")
            }
        },
        handleDelete:(state)=>{
             
           state.name=""

        }
    }
})



export const { increment , decrement,handleDelete} = counterSlice.actions;
export default counterSlice.reducer
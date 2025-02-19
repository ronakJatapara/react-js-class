import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name:"reduxSlice",
    initialState:{student:[]},
    reducers:{
        addData : (state,action)=>{
             state.student.push(action.payload)
            // console.log(action.payload);
            
        },

        deleteData : (state,action)=>{
           let data = state.student.filter((item)=> item.id !=  action.payload)
           state.student = data
        },
        updateData:(state,action)=>{
                   
            state.student.map((el,ind)=>{
                if(el.id == action.payload.editIndex)
                {
                    el.name = action.payload.name
                    el.sub = action.payload.sub
                }
                else{
                    el
                }
            })

        }

    }
})



export const {addData,deleteData,updateData} = reduxSlice.actions;
export default reduxSlice.reducer
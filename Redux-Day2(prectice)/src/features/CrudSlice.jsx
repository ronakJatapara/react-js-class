import { createSlice } from "@reduxjs/toolkit";


export const crudSlice = createSlice({
    name : "CRUD",
    initialState:{student : []},
    reducers :{
        addData:(state,action)=>{
           state.student.push(action.payload)
           console.log(action.payload);
           
        },
        deleteData:(state,action)=>{
            
            let NewData = state.student.filter((item)=> item.id  != action.payload)
            state.student = NewData;

        },
        updateData:(state,action)=>{
           state.student.map((el,ind)=>{
            if(el.id == action.payload.editIndex)
            {
                el.name = action.payload.name
                el.surname = action.payload.surname
                el.std = action.payload.std
            }
            else{
                el
            }
           })
        }
    }
})


export const {addData,deleteData,updateData} = crudSlice.actions;
export default crudSlice.reducer
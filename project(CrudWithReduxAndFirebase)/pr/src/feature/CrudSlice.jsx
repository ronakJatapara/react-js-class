import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk("fetchData",async(obj)=>{
    
    let res = await axios.post(`http://localhost:3000/details`,obj)
    return res. data
})

export const fetchAllData = createAsyncThunk("fetchAllData",async()=>{
    let res = await axios.get(`http://localhost:3000/details`)
    // console.log(res.data);
    
    return res.data
})
export const deleteData =  createAsyncThunk("deleteData",async(id)=>{
    let res = await axios.delete(`http://localhost:3000/details/${id}`)
    return id
})

export const CrudSlice = createSlice({
    name : "CrudSlice",
    initialState : {data:[],loading:false},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.loading = false
        })
        builder.addCase(fetchAllData.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload

        })
        builder.addCase(deleteData.fulfilled,(state,action)=>{
            state.loading = false
            state.data = state.data.filter((item)=> item.id !== action.payload )

        })
    }
   
})



export default CrudSlice.reducer
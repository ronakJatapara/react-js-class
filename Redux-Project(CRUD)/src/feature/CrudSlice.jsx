import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { replace, useLocation, useNavigate } from "react-router-dom";


export const fetchData =  createAsyncThunk("fetchData" , async(obj)=>{
    let res = await axios.post("http://localhost:3000/user",obj)
    return res.data
})

export const fetchAllData =  createAsyncThunk("fetchAllData", async()=>{
    let res  = await axios.get("http://localhost:3000/user")
    return res.data
 })


 export const deleteData = createAsyncThunk("deleteData" , async (id)=>{
    console.log(id);
    await axios.delete(`http://localhost:3000/user/${id}`);
    return id
 })
 export const editData =  createAsyncThunk("editData" , async(id,formData)=>{
   let res = await axios.put(`http://localhost:3000/user/${id}`,formData)
   return res.data
 } )
 



export const CrudSlice = createSlice({
    name : "crudSlice",
    initialState:{data: [], loading : true},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
             state.loading = true
        }),
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading =  false
            state.data.push(action.payload)
        })
        builder.addCase(fetchAllData.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = state.data.filter((item) => item.id !== action.payload);
        });
        builder.addCase(editData.fulfilled, (state,action)=>{
            state.loading = false;
            state.data.map((el,ind)=>{
                if(el.id == action.payload.id){
                    action.payload.formData
                }
                else{
                    el
                }
            })
        })
        
        

    }
})

export default CrudSlice.reducer



// let navigate = useNavigate()

// navigate("/home",{replace:true, state:{obj}})

// in Home.jsx

// const data = useLocation()


// this is demo rest-api 
// this is made in json-server
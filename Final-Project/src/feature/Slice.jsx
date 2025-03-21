import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchData = createAsyncThunk("fetchData", async (obj) => {
  let res = await axios.post("http://localhost:3000/product",obj); // GET request 
  return res.data;
})

export const fetchAllData =  createAsyncThunk("fetchAllData", async()=>{
  let res  = await axios.get("http://localhost:3000/product")
  return res.data
})

 export const DeleteData = createAsyncThunk("DeleteData" , async (id)=>{
     console.log(id);
     await axios.delete(`http://localhost:3000/product/${id}`);
     return id
})


export const editData = createAsyncThunk("editData" , async(data)=>{
let res = await axios.put(`http://localhost:3000/product/${data.data}`)
 
})









const Crudslice = createSlice({
  name: "CrudSlice",
  initialState: { data: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push =(action.payload); 
      })
    
      .addCase(fetchAllData.fulfilled, (state,action) => {
        state.loading = false;
        state.data = action.payload
      })
      
      .addCase(DeleteData.fulfilled, (state,action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item.id !== action.payload);

      });
  },
});

export default Crudslice.reducer;



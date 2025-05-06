import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch API data
export const fetchApi = createAsyncThunk("fetchApi", async () => {
  const response = await axios.get("http://localhost:3000/product");
  return response.data;
});

// Create slice
const CrudSlice = createSlice({
  name: "crudSlice",
  initialState: { data: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

// Export the reducer
export default CrudSlice.reducer;

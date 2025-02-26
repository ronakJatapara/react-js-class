import { configureStore } from "@reduxjs/toolkit";
import ApiSlice  from "../feature/ApiSlice";

export const store = configureStore({
    reducer:{
        ApiReducer:ApiSlice
    }
})
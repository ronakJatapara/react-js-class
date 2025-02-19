import { configureStore } from "@reduxjs/toolkit";
import  reduxSlice  from "../feature/reduxSlice";

export const store = configureStore({
    reducer:{
        reduxReducer: reduxSlice
    }
})
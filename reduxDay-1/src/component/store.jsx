import { configureStore } from "@reduxjs/toolkit";
import { counterSlice }  from "../feature/slice"

export const store = configureStore({
    reducer:{
        counterReducer : counterSlice.reducer
    }
})


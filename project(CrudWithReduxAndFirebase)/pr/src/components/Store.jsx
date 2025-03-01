import { configureStore } from "@reduxjs/toolkit";
import CrudSlice from "../feature/CrudSlice";




export const store =configureStore({
    reducer:{
        crudslice:CrudSlice
    }
})
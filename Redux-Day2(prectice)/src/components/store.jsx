import { configureStore } from "@reduxjs/toolkit";
import  crudSlice  from "../features/CrudSlice";
// import crudSlice  from "./"


export const store =configureStore({
    reducer : {
        crudReducer : crudSlice
    }
})
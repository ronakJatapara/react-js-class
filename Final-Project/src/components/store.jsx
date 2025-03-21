import { configureStore } from "@reduxjs/toolkit";
import  CrudSlice  from "../feature/Slice";



export const Store = configureStore({
    reducer : {
        crudSlice:CrudSlice
    }
})



export default Store
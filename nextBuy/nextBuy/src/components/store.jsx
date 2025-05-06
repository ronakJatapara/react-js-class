import { configureStore } from "@reduxjs/toolkit";
import CrudReducer from "../feature/CrudSlice"; // ✅ import default reducer

export const store = configureStore({
  reducer: {
    SliceReducer: CrudReducer, // ✅ register it here
  },
});

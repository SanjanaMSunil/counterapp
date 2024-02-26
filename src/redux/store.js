import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
    // reducer is set as object
    reducer:{
        // reducer should be in key value pair
        counter:counterSlice
    }
})
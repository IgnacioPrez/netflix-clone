import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../state/user";

export const  store =  configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
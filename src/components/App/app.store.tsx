import { configureStore } from "@reduxjs/toolkit";
import userData from '../features/data.slice'
import users from "../features/usersSlice";

export const store = configureStore({
    reducer:{
        userData,
        users
        
        
    }
})

export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import userData from '../features/data.slice'

export const store = configureStore({
    reducer:{
        userData
        
    }
})
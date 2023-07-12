import { configureStore } from "@reduxjs/toolkit";
import userData from '../features/data.slice'
import cards from "../features/cards.slice";

export const store = configureStore({
    reducer:{
        userData,
        cards
        

        
    }
})
export type AppDispatch = typeof store.dispatch
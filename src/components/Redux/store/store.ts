import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from '../slice/cocktailsSlice'

const store = configureStore({
    reducer: cocktailReducer,
})

export default store;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";

const reducer = combineReducers({
    auth: authSlice.reducer,
})

export const store = configureStore({
    reducer,
});
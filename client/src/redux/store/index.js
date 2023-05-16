import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../slice/userSlice";

const reducer = combineReducers({
    user: userSlice.reducer,
})

export const store = configureStore({
    reducer,
});
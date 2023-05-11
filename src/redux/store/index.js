import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import userSlice from "../slice/userSlice";

const reducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
})

export const store = configureStore({
    reducer,
});
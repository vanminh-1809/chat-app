import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: null,
    user: null,
    loading: false,
    token: null,
    error: null
}

export const login = createAsyncThunk('login', async (data) => {
    const res = await axios.post('http://localhost:8081/api/auth/login', data)
    return await res.data;
})

export const signUp = createAsyncThunk('signUp', async (data) => {
    const res = await axios.post('http://localhost:8081/api/auth/register', data)
    return await res.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.accessToken;
            localStorage.setItem('token', action.payload.accessToken)
            localStorage.setItem('user', JSON.stringify(action.payload.user));
          })
          .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
        //   dang ky
          .addCase(signUp.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(signUp.fulfilled, (state, action) => {
            if(action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.message = action.payload.message;
            }
          })
          .addCase(signUp.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message;
          })
      },
})

export default authSlice;
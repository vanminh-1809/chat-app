import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: null,
    user: null,
    loading: false,
    accessToken: null,
    error: null,
}

export const login = createAsyncThunk('login', async (data) => {
    const res = await axios.post('http://localhost:8081/api/auth/login', data)
    return await res.json();
})

export const signUp = createAsyncThunk('signUp', async (data) => {
    const res = await axios.post('http://localhost:8081/api/auth/register', data)
    return await res.json();
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.accessToken = null;
            localStorage.clear();
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, { payload: { message, user, accessToken, error } }) => {
            state.loading = false;
            if(error) {
                state.error = error;
            } else {
                state.message = message;
                state.user = user;
                state.accessToken = accessToken;

                localStorage.setItem('message', message);
                localStorage.setItem('user', user.stringify());
                localStorage.setItem('accessToken', accessToken);
            }
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
        // dang ky
        [signUp.pending]: (state, action) => {
            state.loading = true;
        },
        [signUp.fulfilled]: (state, { payload: {message, error} }) => {
            state.loading = false;
            if(error) {
                state.error = error;
            } else {
                state.message = message;
            }
        },
        [signUp.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default authSlice.reducer;
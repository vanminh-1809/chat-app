import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: null,
    status: {}
}

export const getUsersByRoomId = createAsyncThunk('users/getAll', async (id) => {
    const res = await axios.get(`http://localhost:8081/api/chat/${id}`);
    return res.data;
})

export const addUserRoom = createAsyncThunk('users/add', async (data) => {
    const res = await axios.put(`http://localhost:8081/api/chat/${data.id}`, data.data);
    return res.data;
})

export const updateAddress = createAsyncThunk('users/updateAddress', async (data) => {
    const res = await axios.put(`http://localhost:8081/api/user/geoLocation/${data.id}`, data.data);
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsersByRoomId.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersByRoomId.fulfilled, (state, action) => {
                state.loading = false;
                state.users = [...action.payload.chat.Users]
            })
            .addCase(getUsersByRoomId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // add user
            .addCase(addUserRoom.pending, (state) => {
                state.loading = true;
            })
            .addCase(addUserRoom.fulfilled, (state, action) => {
                state.loading = false;
                const { arg: { id } } = action.meta;
                if(id) {
                    state.users = state.users.map((item) => item.id === id ? { ...action.payload } : item)
                }
            })
            .addCase(addUserRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            // update address
            .addCase(updateAddress.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateAddress.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(updateAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    }
})

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: null,
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

export const statusOn = createAsyncThunk('users/statusOn', async (data) => {
    const res = await axios.put(`http://localhost:8081/api/user/socketIn/${data.id}`, data.data)
    return res.data;
})

export const statusOff = createAsyncThunk('users/statusOff', async (data) => {
    const res = await axios.put(`http://localhost:8081/api/user/socketOut`, data)
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsersByRoomId.fulfilled, (state, action) => {
                state.loading = false;
                state.users = [...action.payload.chat.Users]
            })
            // add user
            .addCase(addUserRoom.fulfilled, (state, action) => {
                state.loading = false;
                state.users = [...action.payload.chat.Users]
            })
            // update address
            .addCase(updateAddress.fulfilled, (state) => {
                state.loading = false;
            })
            // update status
            .addCase(statusOn.fulfilled, (state) => {
                state.loading = false;
            })
            // status off
            .addCase(statusOff.fulfilled, (state) => {
                state.loading = false;
            })

    }
})

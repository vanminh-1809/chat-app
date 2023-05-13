import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const getUsersByRoomId = createAsyncThunk('users/getAll', async (id) => {
    const res = await axios.get(`http://localhost:8081/api/chat/${id}`);
    return res.data;
})

export const addUserRoom = createAsyncThunk('users/add', async (data) => {
    const res = await axios.put(`http://localhost:8081/api/chat/${data.id}`, data.data);
    return res.data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersByRoomId.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersByRoomId.fulfilled, (state, action) => {
                state.loading = false;
                state.users = [...action.payload.chat];
            })
            .addCase(getUsersByRoomId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
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
    }
})

export default userSlice;
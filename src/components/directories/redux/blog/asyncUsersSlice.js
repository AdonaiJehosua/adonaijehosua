import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        return [...response.data]
    } catch (err) {
        return err.message
    }
})

const asyncUsersSlice = createSlice({
    name: 'asyncUsers',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllAsyncUsers = (state) => state.asyncUsers

export const {  } = asyncUsersSlice.actions
export default asyncUsersSlice.reducer
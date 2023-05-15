const { createSlice } = require("@reduxjs/toolkit")

const initialState = [
    {id: '1', name: 'Doctor'},
    {id: '2', name: 'Dalek'},
    {id: '3', name: 'Tardis'}
]

const asyncUsersSlice = createSlice({
    name: 'asyncUsers',
    initialState,
    reducers: {

    }
})

export const selectAllAsyncUsers = (state) => state.asyncUsers

export const {  } = asyncUsersSlice.actions
export default asyncUsersSlice.reducer
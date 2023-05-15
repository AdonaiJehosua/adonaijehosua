const { createSlice } = require("@reduxjs/toolkit")

const initialState = [
    {id: '1', name: 'Doctor'},
    {id: '2', name: 'Dalek'},
    {id: '3', name: 'Tardis'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export const {  } = usersSlice.actions
export default usersSlice.reducer
const { createSlice } = require("@reduxjs/toolkit")

const initialState = [
    {id: '1', name: 'Name Namovich'},
    {id: '2', name: 'Surname Surnamovich'},
    {id: '3', name: 'Lastname Lastnamovich'}
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
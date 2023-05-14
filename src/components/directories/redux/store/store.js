import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../simpleCounter/counterSlice'
import postsReducer from '../posts/postsSlice'
import usersReducer from '../posts/usersSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
})
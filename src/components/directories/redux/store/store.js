import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../simpleCounter/counterSlice'
import postsReducer from '../posts/postsSlice'
import asyncPostsReducer from '../asyncLogic/asyncPostsSlice'
import usersReducer from '../posts/usersSlice'
import asyncUsersReducer from '../asyncLogic/asyncUsersSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        asyncPosts: asyncPostsReducer,
        users: usersReducer,
        asyncUsers: asyncUsersReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../simpleCounter/counterSlice'
import postsReducer from '../posts/postsSlice'
import asyncPostsReducer from '../asyncLogic/asyncPostsSlice'
import usersReducer from '../posts/usersSlice'
import asyncUsersReducer from '../asyncLogic/asyncUsersSlice'
import abyrvalpReducer from '../abyrvalp/abyrvalpSlice'
import formReducer from '../abyrvalp/formSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        asyncPosts: asyncPostsReducer,
        users: usersReducer,
        asyncUsers: asyncUsersReducer,
        abyrvalp: abyrvalpReducer,
        form: formReducer,
    }
})

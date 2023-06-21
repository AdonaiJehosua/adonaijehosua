import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { sub } from "date-fns"

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL)
        return [...response.data]
    } catch (err) {
        return err.message
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    try {
        const response = await axios.post(POSTS_URL, initialPost)
        return response.data
    } catch (err) {
        return err.message
    }
})

export const asyncPostsSlice = createSlice({
    name: 'asyncPosts',
    initialState,
    reducers: {
        asyncPostAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)

            },
            prepare(title, body, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body,
                        date: new Date().toISOString(),
                        reaction: {
                            thumbsUp: 0,
                            eyes: 0,
                            heart: 0,
                            rocket: 0,
                            hooray: 0
                        },
                        userId
                    }
                }
            }
        },
        asyncReactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reaction[reaction]++
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                let min = 1
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString()
                    post.reaction = {
                        thumbsUp: 0,
                        hooray: 0,
                        heart: 0,
                        rocket: 0,
                        eyes: 0
                    }
                    return post
                })
                state.posts = state.posts.concat(loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString()
                action.payload.reaction = {
                    thumbsUp: 0,
                    hooray: 0,
                    heart: 0,
                    rocket: 0,
                    eyes: 0
                }
                state.posts.push(action.payload)
            })
    }

})

export const selectAllAsyncPosts = (state) => state.asyncPosts.posts
export const getAsyncPostsStatus = (state) => state.asyncPosts.status
export const getAsyncPostsError = (state) => state.asyncPosts.error

export const { asyncPostAdded, asyncReactionAdded } = asyncPostsSlice.actions
export default asyncPostsSlice.reducer
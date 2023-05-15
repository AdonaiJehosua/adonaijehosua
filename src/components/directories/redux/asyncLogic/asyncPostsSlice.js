import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'Hello',
        content: 'Oh! Hello guys!',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userId: '1',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
    {
        id: '2',
        title: 'Attention',
        content: 'Exterminate!!!!',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        userId: '2',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
    {
        id: '3',
        title: '...',
        content: '...',
        date: sub(new Date(), { minutes: 4 }).toISOString(),
        userId: '3',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
]

export const asyncPostsSlice = createSlice({
    name: 'asyncPosts',
    initialState,
    reducers: {
        asyncPostAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        },
                        userId
                    }
                }
            }
        },
        asyncReactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllAsyncPosts = (state) => state.asyncPosts

export const { asyncPostAdded, asyncReactionAdded } = asyncPostsSlice.actions
export default asyncPostsSlice.reducer
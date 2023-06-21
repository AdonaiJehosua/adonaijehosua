import { Box, LinearProgress, Typography } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { selectAllAsyncPosts, getAsyncPostsStatus, getAsyncPostsError, fetchPosts } from './asyncPostsSlice'
import { AsyncAddPostForm } from './AsyncAddPostForm'
import { PostsExcerpt } from './PostsExcerpt'
import { fetchUsers } from "./asyncUsersSlice"


const style = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {},
    postWrapper: {
        border: '1px solid #000',
        borderRadius: '10px',
        width: '60%',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: '10px 0'
    },
    postTitle: {},
    postContent: {},
}

export function Blog() {

    const dispatch = useDispatch()

    const posts = useSelector(selectAllAsyncPosts)
    const postsStatus = useSelector(getAsyncPostsStatus)
    const error = useSelector(getAsyncPostsError)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
            dispatch(fetchUsers())
        }
    }, [postsStatus, dispatch])

    let content

    if (postsStatus === 'loading') {
        <LinearProgress />
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postsStatus === 'failed') {
        content = <Typography>{error}</Typography>
    }

    return (
        <Box sx={style.wrapper}>
            <AsyncAddPostForm />
            <Typography sx={style.title} variant="h3" >Посты</Typography>
            {content}
        </Box>
    )
}
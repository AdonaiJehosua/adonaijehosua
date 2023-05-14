import { Box, Divider, Typography } from "@mui/material"
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import { AddPostForm } from './AddPostForm'

const style = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {

    },
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
    postTitle: {

    },
    postContent: {

    },

}

export function Posts () {

    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post => (
        <Box key={post.id} sx={style.postWrapper}>
            <Typography variant="h5" sx={style.postTitle}>{post.title}</Typography>
            <Box sx={style.postContent}>{post.content.substring(0, 100)}</Box>
        </Box>
    ))


    return (
        <Box sx={style.wrapper}>
            <AddPostForm/>
            <Typography sx={style.title} variant="h3" >Посты</Typography>
            {renderPosts}
        </Box>
    )
}
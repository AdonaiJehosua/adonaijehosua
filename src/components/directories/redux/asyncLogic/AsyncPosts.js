import { Box, Typography } from "@mui/material"
import { useSelector } from 'react-redux'
import { selectAllAsyncPosts } from './asyncPostsSlice'
import { AsyncAddPostForm } from './AsyncAddPostForm'
import { AsyncPostsAuthor } from './AsyncPostsAuthor'
import { AsyncTimeAgo } from './AsyncTimeAgo'
import { AsyncReactionButtons } from './AsyncReactionButtons'

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

export function AsyncPosts() {

    const posts = useSelector(selectAllAsyncPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map(post => (
        <Box key={post.id} sx={style.postWrapper}>
            <Typography variant="h5" sx={style.postTitle}>{post.title}</Typography>
            <Box sx={style.postContent}>{post.content.substring(0, 100)}</Box>
            <Box sx={{ margin: '5px 0' }}>
                <AsyncPostsAuthor userId={post.userId} />
                <AsyncTimeAgo timestamp={post.date} />
            </Box>
            <AsyncReactionButtons post={post} />
        </Box>
    ))


    return (
        <Box sx={style.wrapper}>
            <AsyncAddPostForm />
            <Typography sx={style.title} variant="h3" >Посты</Typography>
            {renderPosts}
        </Box>
    )
}
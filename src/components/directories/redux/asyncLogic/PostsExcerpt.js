import React from 'react'
import { AsyncPostsAuthor } from './AsyncPostsAuthor'
import { AsyncTimeAgo } from './AsyncTimeAgo'
import { AsyncReactionButtons } from './AsyncReactionButtons'
import { Box, Typography } from '@mui/material'

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

export const PostsExcerpt = ({ post }) => {
  return (
        <Box sx={style.postWrapper}>
            <Typography variant="h5" sx={style.postTitle}>{post.title}</Typography>
            <Box sx={style.postContent}>{post.body.substring(0, 100)}</Box>
            <Box sx={{ margin: '5px 0' }}>
                <AsyncPostsAuthor userId={post.userId} />
                <AsyncTimeAgo timestamp={post.date} />
            </Box>
            <AsyncReactionButtons post={post} />
        </Box>
  )
}

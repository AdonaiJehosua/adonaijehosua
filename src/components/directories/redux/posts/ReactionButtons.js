import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'
import { Box, Button } from '@mui/material'

const reactionEmoji = {
        thumbsUp: '👍',
        wow: '🤩',
        heart: '💟',
        rocket: '🚀',
        coffee: '☕'
}

export const ReactionButtons = ({post}) => {

    const dicpatch = useDispatch()

    const reactionsButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <Button
            key={name}
            onClick={() => dicpatch(reactionAdded({postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </Button>
        )
    })

    return <Box>{reactionsButtons}</Box>
}

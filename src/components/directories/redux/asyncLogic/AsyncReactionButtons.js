import { useDispatch } from 'react-redux'
import { asyncReactionAdded} from './asyncPostsSlice'
import { Box, Button } from '@mui/material'

const reactionEmoji = {
        thumbsUp: '👍',
        wow: '🤩',
        heart: '💟',
        rocket: '🚀',
        coffee: '☕'
}

export const AsyncReactionButtons = ({post}) => {

    const dicpatch = useDispatch()

    const asyncReactionsButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <Button
            key={name}
            onClick={() => dicpatch(asyncReactionAdded({postId: post.id, reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </Button>
        )
    })

    return <Box>{asyncReactionsButtons}</Box>
}

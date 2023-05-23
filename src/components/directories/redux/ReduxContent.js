import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import { SimpleCounter } from "./simpleCounter/SimpleCounter"
import { Posts } from "./posts/Posts"
import { AsyncPosts } from "./asyncLogic/AsyncPosts"
import { store } from './store/store'
import { Provider } from 'react-redux'

export function ReduxContent() {
    return (
        <Provider store={store}>
            <Box>
                <DirectoryItem fileName={'Простой счетчик'} ItemContent=<SimpleCounter /> />
                <DirectoryItem fileName={'Посты'} ItemContent=<Posts /> />
                <DirectoryItem fileName={'Асинхронные посты'} ItemContent=<AsyncPosts /> />
            </Box>
        </Provider>
    )
}
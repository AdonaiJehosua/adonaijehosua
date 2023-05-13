import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import { SimpleCounter } from "./simpleCounter/SimpleCounter"
import { store } from './store/store'
import { Provider } from 'react-redux'



export function ReduxContent() {
    return (
        <Provider store={ store }>
            <Box>
                <DirectoryItem fileName={'Простой счетчик'} ItemContent=<SimpleCounter /> />
            </Box>
        </Provider>
    )
}
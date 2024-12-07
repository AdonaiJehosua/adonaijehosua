import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import {Fibonacci} from './fibonacci/Fibonacci'

export function SomeFunctions() {
    return (
            <Box>
                <DirectoryItem fileName={'Фибоначчи'} ItemContent=<Fibonacci /> />
            </Box>
    )
}
import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import {Fibonacci} from './fibonacci/Fibonacci'
import {JsNinja} from './js-ninja/JsNinja'

export function SomeFunctions() {
    return (
            <Box>
                <DirectoryItem fileName={'Фибоначчи'} ItemContent=<Fibonacci /> />
                <DirectoryItem fileName={'JS ниндзя'} ItemContent=<JsNinja /> />
            </Box>
    )
}

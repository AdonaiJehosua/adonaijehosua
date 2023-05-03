import { Box } from "@mui/material"
import { Functional1 } from "./func1/Functional1"
import { DirectoryItem } from "../DirectoryItem"



export function FunctionalContent() {
    return (
        <Box>
            <DirectoryItem fileName={'Функция1'} ItemContent=<Functional1 /> />
        </Box>
    )
}
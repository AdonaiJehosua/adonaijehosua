import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import { FirstFunctions } from "./firstFunctions/FirstFunctions"

export function AcademyHomeworks() {
    return (
            <Box>
                <DirectoryItem fileName={'1. Функции'} ItemContent=<FirstFunctions /> />
            </Box>
    )
}
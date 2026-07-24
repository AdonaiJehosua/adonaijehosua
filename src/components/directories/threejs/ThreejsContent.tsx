import { Box } from "@mui/material"
import { DirectoryItem } from "../DirectoryItem"
import {FirstLessonThreeJS} from '@/components/directories/threejs/firstLesson/firstLesson';



export function ThreeJSContent() {
    return (
        <Box>
            <DirectoryItem fileName={'Первая проба'} ItemContent=<FirstLessonThreeJS/> />
        </Box>
    )
}

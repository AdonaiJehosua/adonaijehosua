import { Box } from "@mui/material"
import { Css1 } from "./css1/Css1";
import { DirectoryItem } from "../DirectoryItem";

export function CssContent() {
    return (
        <Box>
            <DirectoryItem fileName={'Css1'} ItemContent=<Css1 /> />
        </Box>
    )
}
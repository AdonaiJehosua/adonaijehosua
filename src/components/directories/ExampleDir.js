import Draggable from "react-draggable"
import FolderIcon from '@mui/icons-material/Folder'
import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react"


const style = {
    frame: {
        width: '5vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: 'black',
        }
    },
    iconWrapper: {
        width: '5.1vw',

    },
    dirIcon: {
        fontSize: '3vw',
        color: '#fff'
    },
    dirName: {
        fontSize: '1vw',
        wordBreak: 'break-all',
        margin: '0 2px',
        color: '#fff'
    }
}

export const ExampleDir = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Draggable bounds='parent'>
                <Box sx={style.frame} onDoubleClick={handleOpen}>
                    <FolderIcon sx={style.dirIcon} />
                    <Typography sx={style.dirName}>Примеры</Typography>
                </Box>
            </Draggable>
            <Draggable bounds='parent'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{width: '100px', height: '100px', position: 'absolute'}}
                    container={() => {if (typeof window !== 'undefined') {return document.getElementById('desktop')}}}
                >
                    <Box sx={{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: '#fff' }}>
                        <Button onClick={handleClose}>Close</Button>
                    </Box>
                </Modal>
            </Draggable>
        </>
    )
}
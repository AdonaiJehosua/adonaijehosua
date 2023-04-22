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
    },
    openedDir: {
        height: '100%',
        backgroundColor: '#fff',
    },
    openedDirBackground: {
        width: '50%',
        height: '60%',
        position: 'absolute',
    },
    openedDirBackgroundMax: {
        width: '100%',
        height: '100%',
    },
    opDirHead: {
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '0 0 0 5px',
    },
    opDirHeadTitle: {
        fontSize: '1.5vw'
    },
    opDirHeadButtons: {

    }
}

export const Directory = ({ dirName }) => {

    const [open, setOpen] = useState(false);
    const [max, setMax] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleMaximize = () => {
        setMax(true)
    }

    const handleRevMaximize = () => {
        setMax(false)
    }

    return (
        <>
            <Draggable bounds='parent'>
                <Box sx={style.frame} onDoubleClick={handleOpen}>
                    <FolderIcon sx={style.dirIcon} />
                    <Typography sx={style.dirName}>{dirName}</Typography>
                </Box>
            </Draggable>
            <Draggable bounds='parent'>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    disableScrollLock={true}
                    hideBackdrop={true}
                    sx={!max ? style.openedDirBackground : style.openedDirBackgroundMax}
                    container={() => { if (typeof window !== 'undefined') { return document.getElementById('desktop') } }}
                >
                    <Box sx={style.openedDir}>
                        <Box sx={style.opDirHead}>
                            <Typography sx={style.opDirHeadTitle}>
                                {dirName}
                            </Typography>
                            <Box sx={style.opDirHeadButtons}>
                                <Button onClick={handleClose}>Minimize</Button>
                                <Button onClick={!max ? handleMaximize : handleRevMaximize}>Maximize</Button>
                                <Button onClick={handleClose}>Close</Button>
                            </Box>
                        </Box>

                    </Box>
                </Modal>
            </Draggable>
        </>
    )
}
import Draggable from "react-draggable"
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react"


const style = {
    frame: {
        width: '5vw',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#000000CC',
        },
        textShadow: '0px 0px 2px black',
    },
    iconWrapper: {
        width: '5.1vw',
    },
    dirIcon: {
        fontSize: '3vw',
        color: '#FFEB73',
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
        border: '1px solid #000000'
    },
    openedDirBackground: {
        width: '50%',
        height: '60%',
        position: 'absolute',
        top: '30%',
        left: '25%'
    },
    opDirHead: {
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '0 5px',
    },
    opDirHeadTitle: {
        fontSize: '1.5vw',
    },
    opDirHeadButtons: {
    },
    opDirHeadButton: {
        justifyContent: 'right',
        color: '#fff',
        padding: '0',
        minWidth: '0',
        '&:hover': {
            backgroundColor: 'red',
        },
    },
    dirContent: {
        color: 'black'
    }
}

export const Directory = ({ dirName, DirContent }) => {

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
                    <FolderSharpIcon sx={style.dirIcon} />
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
                    sx={style.openedDirBackground}
                    container={() => { if (typeof window !== 'undefined') { return document.getElementById('desktop') } }}
                >
                    <Box sx={style.openedDir}>
                        <Box sx={style.opDirHead}>
                            <Typography sx={style.opDirHeadTitle}>
                                {dirName}
                            </Typography>
                            <Box sx={style.opDirHeadButtons}>
                                <Button onClick={handleClose} sx={style.opDirHeadButton}><CloseIcon/></Button>
                            </Box>
                        </Box>
                        <Box sx={style.dirContent}>
                            {DirContent}
                        </Box>
                    </Box>
                </Modal>
            </Draggable>
        </>
    )
}
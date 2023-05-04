import { Box, Button, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { useState } from "react"

const style = {
    frame: {
        width: '5vw',
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
        color: '#000000'
    },
    openedDir: {
        height: '100%',
        backgroundColor: '#fff',
        border: '1px solid #000000'
    },
    openedDirBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    opDirHead: {
        height: '7%',
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


export function DirectoryItem({ fileName, ItemContent }) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Box sx={style.frame} onDoubleClick={handleOpen}>
                <Typography sx={style.dirName}>{fileName}</Typography>
            </Box>
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
                                {fileName}
                            </Typography>
                            <Box sx={style.opDirHeadButtons}>
                                <Button onClick={handleClose} sx={style.opDirHeadButton}><CloseIcon /></Button>
                            </Box>
                        </Box>
                        <Box sx={style.dirContent}>
                            {ItemContent}
                        </Box>
                    </Box>
                </Modal>
        </>
    )
}

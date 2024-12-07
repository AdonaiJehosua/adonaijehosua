import { useState } from "react"
import { Box, Button, Modal } from "@mui/material"
import { StartMenu } from "./StartMenu"
import { Directory } from './directories/Directory'
import { FunctionalContent } from './directories/functionalProg/FunctionalContent'
import { ReduxContent } from './directories/redux/ReduxContent'
import { CssContent } from './directories/cssExamples/CssContent'
import { AcademyHomeworks } from './directories/academyHomeworks/AcademyHomeworks'
import { SomeFunctions } from './directories/someFunctions/SomeFunctions'
import desktopImage from '../images/fone/11.webp'

const style = {
    monitor: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '1280px',
        height: '90%',
        minWidth: '500px',
        minHeight: '280px',
        border: '10px solid silver',
        borderRadius: '15px',
        backgroundColor: 'gray',
        boxShadow: 24,
    },
    openButton: {
        color: '#4AA329'
    },
    loadingText: {
        color: '#3BDA00',
        fontFamily: 'monospace'
    },
    contentWrapper: {
        overflow: 'auto',
        flexWrap: 'nowrap',
        fontFamily: 'monospace',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
    },
    information: {
        padding: '10px'
    },
    desktop: {
        backgroundImage: `url(${desktopImage.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        position: 'relative'
    }
}

export const PrivatMonitor = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            {!open && <Button sx={style.openButton} onClick={handleOpen}>ВОЙТИ</Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock={true}
            >
                <Box sx={style.monitor}>
                    <Box sx={style.desktop} id={'desktop'}>
                        <Directory dirName={'FP'} DirContent=<FunctionalContent /> />
                        <Directory dirName={'CSS'} DirContent=<CssContent /> />
                        <Directory dirName={'typescript'} />
                        <Directory dirName={'Redux'} DirContent=<ReduxContent /> />
                        <Directory dirName={'Домашки акадкмии'} DirContent=<AcademyHomeworks />/>
                        <Directory dirName={'Разные функции'} DirContent=<SomeFunctions />/>
                    </Box>
                    <StartMenu />
                </Box>
            </Modal>
        </>
    )
}
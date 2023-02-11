import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { TypeAnimation } from "react-type-animation"
import Grid from '@mui/material/Grid'
import { FullDossier } from "./FullDossier";
import { DossierMainPage } from "./DossierMainPage";

const style = {
    monitor: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        height: '50vw',
        minWidth: '500px',
        border: '10px solid silver',
        borderRadius: '15px',
        backgroundColor: '#000',
        boxShadow: 24,
        padding: '10px',
    },
    openButton: {
        color: '#fff'
    },
    loadingText: {
        color: '#fff',
        fontFamily: 'monospace'
    },
    contentWrapper: {
        fontFamily: 'monospace',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 'auto'
    },
    information: {
        padding: '10px'
    },
}

export const MainMonitor = () => {

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState('mainPage')


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setLoading(true)
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
            >
                <Box sx={style.monitor}>
                    {loading && <TypeAnimation
                        sequence={[
                            'Подключаемся к базам.',
                            500,
                            'Подключаемся к базам..',
                            500,
                            'Подключаемся к базам...',
                            1000,
                            'Загружаем профиль.',
                            500,
                            'Загружаем профиль..',
                            300,
                            'Загружаем профиль...',
                            1000,
                            'Успешно',
                            1000,
                            () => {
                                setLoading(false)
                            }
                        ]}
                        wrapper="div"
                        cursor={false}
                        deletionSpeed={80}
                        style={style.loadingText}
                    />}
                    {(!loading && page === 'mainPage') && <Grid container sx={style.contentWrapper}>
                        <DossierMainPage setPage={setPage}/>
                    </Grid>}
                    {(!loading && page === 'FullDossier') && <Grid container sx={style.contentWrapper}>
                        <FullDossier setPage={setPage}/>
                    </Grid>}
                </Box>
            </Modal>
        </>
    )
}
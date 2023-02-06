import { useState } from "react";
import { Box, Button, Container, Modal } from "@mui/material";
import { TypeAnimation } from "react-type-animation"
import Grid from '@mui/material/Grid'
import Link from "next/link";

const style = {
    monitor: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',
        height: '50vw',
        border: '10px solid silver',
        borderRadius: '15px',
        backgroundColor: '#000',
        boxShadow: 24,
        p: 1,
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
        alignItems: 'center',
        margin: 'auto'
    },
    information: {
        padding: '10px'
    },
    photo: {
        width: '30%',
        height: '80%',
        backgroundColor: '#fff',
    },
}

export const MainMonitor = () => {

    const [loading, setLoading] = useState(true)



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
                    {!loading && <Grid container spacing={2} sx={style.contentWrapper}>
                        <Grid item xs={3} sx={style.photo}>
                        </Grid>
                        <Grid item container xs={7} style={style.information}>
                            <Grid item>
                                Рагозин Сергей Олегович
                            <Link href={'*/dossier'}>Открыть полное досье</Link>
                            </Grid>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </Grid>}
                </Box>
            </Modal>
        </>
    )
}
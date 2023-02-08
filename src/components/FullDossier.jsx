import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'

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

export function FullDossier ({setPage}) {
    return (
        <>
            <Grid item xs={3} sx={style.photo}>
            </Grid>
            <Grid item container xs={7} style={style.information}>
                <Grid item>
                    Рагозин Сергей Олегович
                </Grid>
                    <Button onClick={() => setPage('mainPage')}>Назад</Button>
            </Grid>
        </>
    )
}
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { Box } from "@mui/material"

const style = {
    item: {
    },
    itemHeader: {
    },
    itemContent: {
    },
    contentWrapper: {
        overflow: 'auto',
        flexWrap: 'nowrap',
        fontFamily: 'monospace',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        color: '#3BDA00'
    },
    buttons: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    }
}

export function FullDossier({ setPage }) {
    return (
        <Grid container style={style.contentWrapper}>
            <Grid item xs container>~
                <Grid item container style={style.item}>
                    <Grid item xs={4} style={style.itemHeader}>Фамилия</Grid>
                    <Grid item xs={8} style={style.itemContent}>Рагозин</Grid>
                    <Grid item xs={4} style={style.itemHeader}>Имя</Grid>
                    <Grid item xs={8} style={style.itemContent}>Сергей</Grid>
                    <Grid item xs={4} style={style.itemHeader}>Отчество</Grid>
                    <Grid item xs={8} style={style.itemContent}>Олегович</Grid>
                </Grid>
            </Grid>

            <Grid item xs style={style.buttons}>
                <Button onClick={() => setPage('mainPage')}>Назад</Button>
            </Grid>
        </Grid>
    )
}
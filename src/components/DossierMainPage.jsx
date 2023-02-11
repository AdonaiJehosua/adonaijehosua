import { Box, Button, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import photo from '../images/authorPhoto.jpg'

const style = {
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
        border: '1px solid white',
        borderRadius: '5px',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    photo: {
        width: '100%',
        border: '1px solid white',
        borderRadius: '5px'
    },
    infoItem: {
        borderBottom: '1px solid white',
        padding: '5px',
        margin: '0 0 5px 5px'
    }
}

const days = () => {
    const d0 = new Date(2019, 10, 15);
    const d1 = new Date();
    const dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24)
    return Math.floor(dt)
}
const age = () => {
    const d0 = new Date(1993, 11, 18);
    const d1 = new Date();
    const dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24 * 365)
    return Math.floor(dt)
}


export function DossierMainPage({ setPage }) {
    return (
        <>
            <Grid item container xs={3} >
                <Box component={'img'} sx={style.photo} alt={'photo'} src={photo.src} />
            </Grid>
            <Grid item container xs={9} style={style.information}>
                <Typography variant={'h6'} sx={style.infoItem}>Рагозин Сергей Олегович</Typography>
                <Box sx={style.infoItem}><Typography component={'span'}>Дней на орбите: </Typography>{days()}</Box>
                <Box sx={style.infoItem}><Typography component={'span'}>Ключевые навыки: </Typography>джиэс, эйчтиэмэл, цеэсэс, нод джиэс, капээсэс, коминтерн, гоэлро, эмэртэ.</Box>
                <Box sx={style.infoItem}>
                    <Typography>Позывные</Typography>
                    <Box>Телеграмм: adonaijehosua</Box>
                    <Box>Почта: s.o.ragozin@gmail.com</Box>
                </Box>
                <Button size='small' sx={style.openButton} onClick={() => setPage('FullDossier')}>Открыть полное досье...</Button>
            </Grid>
        </>
    )
}
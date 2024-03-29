import { Box, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import photo from '../images/authorPhoto.jpg'

const style = {
    openButton: {
        color: '#4AA329',
        border: '1px solid #3BDA00',
        margin: '10px',
        backgroundColor: '#192914'
    },
    loadingText: {
        color: '#3BDA00',
        fontFamily: 'monospace'
    },
    information: {
        color: '#3BDA00',
        border: '1px solid #3BDA00',
        borderRadius: '5px',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    photo: {
        width: '100%',
        border: '1px solid #3BDA00',
        borderRadius: '5px'
    },
    infoItem: {
        borderBottom: '1px solid #3BDA00',
        padding: '5px 0',
        margin: '0 5px 5px 10px'
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
        '&::WebkitScrollbar': {
            display: 'none'
        }
    }
}

const days = () => {
    const d0 = new Date(2021, 10, 15);
    const d1 = new Date();
    const dt = (d1.getTime() - d0.getTime()) / (1000 * 60 * 60 * 24)
    return Math.floor(dt)
}

export function DossierMainPage({ setPage }) {
    return (
        <Grid container style={style.contentWrapper}>
            <Grid item container xs={3} >
                <Box component={'img'} sx={style.photo} alt={'photo'} src={photo.src} />
            </Grid>
            <Grid item container xs={9} style={style.information}>
                <Typography variant={'h6'} sx={style.infoItem}>Рагозин Сергей Олегович</Typography>
                <Box sx={style.infoItem}><Typography component={'span'}>Дней на орбите: </Typography>{days()}</Box>
                <Box sx={style.infoItem}><Typography component={'span'}>Ключевые навыки: </Typography>джиэс, эйчтиэмэл, цеэсэс, нод джиэс, капээсэс, коминтерн, гоэлро, эмэртэ.</Box>
                <Box sx={style.infoItem}>
                    <Typography>Каналы связи</Typography>
                    <Box>Телеграмм: adonaijehosua</Box>
                    <Box>Почта: s.o.ragozin@gmail.com</Box>
                </Box>
                <Button size='small' sx={style.openButton} onClick={() => setPage('FullDossier')}>Открыть полное досье...</Button>
            </Grid>
        </Grid>
    )
}
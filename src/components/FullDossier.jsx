import { Button, Typography } from '@mui/material'
import { Box } from "@mui/material"

const style = {
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0 10px'
    },
    itemHeader: {
        fontSize: '16px',
        lineHeight: '24px',
        minWidth: '80px'
    },
    itemContent: {
        fontSize: '18px',
        lineHeight: '24px'
    },
    itemsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #3BDA00',
        marginBottom: '5px'
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
        color: '#3BDA00',
        border: '1px solid #3BDA00',
        borderRadius: '5px',
        padding: '10px'
    },
    chracter: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    }
}

export function FullDossier({ setPage }) {
    return (
        <Box style={style.contentWrapper}>
            <Box sx={style.chracter}>
                <Box sx={style.itemsWrapper}>
                    <Box style={style.item}>
                        <Box style={style.itemHeader}>Звание</Box>
                    </Box>
                    <Box style={style.item}>
                        <Box sx={{...style.itemContent, fontSize: '20px'}} >Капитан</Box>
                    </Box>
                </Box>
                <Box sx={style.itemsWrapper}>
                    <Box style={style.item}>
                        <Box style={style.itemHeader}>Фамилия</Box>
                        <Box style={style.itemHeader}>Имя</Box>
                        <Box style={style.itemHeader}>Отчество</Box>
                    </Box>
                    <Box style={style.item}>
                        <Box style={style.itemContent}>Рагозин</Box>
                        <Box style={style.itemContent}>Сергей</Box>
                        <Box style={style.itemContent}>Олегович</Box>
                    </Box>
                </Box>
                <Box sx={style.itemsWrapper}>
                    <Box style={style.item}>
                        <Box style={style.itemHeader}>Краткое жизнеописание</Box>
                    </Box>
                    <Box style={style.item}>
                        <Box style={style.itemContent}>
                            <Typography>Где бы точно не захотели сейчас оказаться, так это в всех, кто попадётся под руку. Война так война. Как заявил лидер французских левых Жан-Люк Меланшон, Пришло время перейти к власти нарока что🤨</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box style={style.buttons}>
                    <Button onClick={() => setPage('mainPage')}>Назад</Button>
                </Box>
            </Box>
        </Box>
    )
}
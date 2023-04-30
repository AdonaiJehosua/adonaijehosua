import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from "@mui/material"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import firstImg from '../images/docs/EVMarc.png'
import secondImg from '../images/docs/Innopolis.png'
import thirdImg from '../images/docs/ITMO.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'



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
        minWidth: '125px'
    },
    itemContent: {
        fontSize: '18px',
        lineHeight: '24px',
        width: '100%'
    },
    itemsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #3BDA00',
        marginBottom: '10px',
        paddingBottom: '10px'
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
        color: '#3BDA00',
        border: '1px solid #3BDA00',
        borderRadius: '5px',
        padding: '10px',
        "&::-webkit-scrollbar": {
            display: 'none'
        },
    },
    chracter: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    slideImage: {
        width: '100%',
        height: '100%',
        backgroundImage: '',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    slideContent: {
        backgroundColor: '#3BDA0040',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    slideButton: {
        position: 'absolute',
        top: '0%',
        backgroundColor: '#ffffff00',
        border: '0',
        height: '100%',
        width: '12%'
    },
    slideTitle: {
        color: '#3BDA00',
        backgroundColor: 'black',
        padding: '0 7px',
        textAlign: 'center'
    }
}

export function FullDossier({ setPage }) {
    return (
        <Box sx={style.contentWrapper}>
            <Box sx={style.chracter}>
                <Box sx={style.itemsWrapper}>
                    <Box style={style.item}>
                        <Box style={style.itemHeader}>Звание</Box>
                    </Box>
                    <Box style={style.item}>
                        <Box sx={{ ...style.itemContent, fontSize: '20px' }} >Капитан</Box>
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
                        <Box style={style.itemHeader}>Характеристика</Box>
                    </Box>
                    <Box style={style.item}>
                        <Box style={style.itemContent}>
                            <Typography>Где бы точно не захотели сейчас оказаться, так это в всех, кто попадётся под руку. Война так война. Как заявил лидер французских левых Жан-Люк Меланшон, Пришло время перейти к власти нарока что🤨</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={style.itemsWrapper}>
                    <Box style={style.item}>
                        <Box style={style.itemHeader}>Подготовка</Box>
                    </Box>
                    <Box style={{ ...style.item, width: '100%' }}>
                        <Box sx={style.itemContent} >
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={50}
                                totalSlides={3}
                                style={{ position: 'relative' }}
                            >
                                <Slider>
                                    <Slide>
                                        <Box sx={{ ...style.slideImage, backgroundImage: `url(${secondImg.src})` }}>
                                            <Box sx={style.slideContent}>
                                                <Typography sx={style.slideTitle}>Переподготовка<br/>Университет Иннополис</Typography>
                                            </Box>
                                        </Box>
                                    </Slide>
                                    <Slide>
                                        <Box sx={{ ...style.slideImage, backgroundImage: `url(${thirdImg.src})` }}>
                                            <Box sx={style.slideContent}>
                                                <Typography sx={style.slideTitle}>Повышение квалификации</Typography>
                                            </Box>
                                        </Box>
                                    </Slide>
                                    <Slide>
                                        <Box sx={{ ...style.slideImage, backgroundImage: `url(${firstImg.src})` }}>
                                            <Box sx={style.slideContent}>
                                                <Typography sx={style.slideTitle}>Архитектура ЭВМ</Typography>
                                            </Box>
                                        </Box>
                                    </Slide>
                                </Slider>
                                <ButtonBack style={{ ...style.slideButton }}><ArrowBackIosIcon /></ButtonBack>
                                <ButtonNext style={{ ...style.slideButton, right: '0%' }}><ArrowForwardIosIcon /></ButtonNext>
                            </CarouselProvider>
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
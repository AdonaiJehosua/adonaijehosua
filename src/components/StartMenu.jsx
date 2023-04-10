import { Box } from "@mui/material"
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import { useState } from "react"


const style = {
    startMenu: {
        backgroundColor: '#120F14',
        borderRadius: '0 0 5px 5px',
        height: '26px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: 'inset 2px 3px 6px 3px #2c2430',
        padding: '3px'
    },
    startButton: {
        backgroundColor: '#120F14',
        padding: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        boxShadow: 'inset 3px -1px 6px 2px #2c2430',
        transition: 'box-shadow 0.5s',
        width: '20px',
        height: '20px',
        '&:hover': {
            boxShadow: 'inset 0px 0px 11px 4px #2c2430',
        }
    },
    startMenuIcon: {
        fontSize: '12px'
    },
    dateTimeContainer: {
        fontSize: '6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    taskBar: {
        flexGrow: 5
    }
}







export const StartMenu = () => {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    
    setInterval(() => {
        const time = new Date()
        const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        const currentTime = hour + ':' + minute
        const year = time.getFullYear()
        const month = time.getMonth()
        const day = time.getDate()
        const currentDate = `${day}/${month + 1}/${year}`
        setTime(currentTime)
        setDate(currentDate)
    }, 1000)

    


    return (
        <Box sx={style.startMenu}>
            <Box sx={style.startButton}>
                <WidgetsOutlinedIcon sx={style.startMenuIcon} />
            </Box>
            <Box sx={style.taskBar}>

            </Box>
            <Box sx={style.dateTimeContainer}>
                <Box sx={style.time}>{time}</Box>
                <Box sx={style.date}>{date}</Box>
            </Box>
        </Box>
    )
}
import { Box, Button } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from './counterSlice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded'

const style = {
    wrapper: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        fontSize: '50px',
        textAlign: 'center',
        marginBottom: '10px',
    },
    buttonsWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        color: '#fff',
        margin: '0 1vw'
    }
}

export function SimpleCounter() {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <Box sx={style.wrapper}>
            <Box sx={style.count}>
                    {count}
            </Box>
            <Box sx={style.buttonsWrapper}>
                <Button variant='contained' sx={style.button} onClick={() => dispatch(increment())}><AddRoundedIcon/></Button>
                <Button variant='outlined' sx={{...style.button, color: '#1976d2'}} onClick={() => dispatch(reset())}><RestartAltRoundedIcon/></Button>
                <Button variant='contained' sx={style.button} onClick={() => dispatch(decrement())}><RemoveRoundedIcon/></Button>
            </Box>
        </Box>
    )
}
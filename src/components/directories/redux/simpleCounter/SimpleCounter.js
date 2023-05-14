import { Box, Button, OutlinedInput, InputAdornment, IconButton } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded'
import { useState } from 'react'

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
    },
    addInput: {
        marginTop: '10px'
    }
}

export function SimpleCounter() {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <Box sx={style.wrapper}>
            <Box sx={style.count}>
                {count}
            </Box>
            <Box sx={style.buttonsWrapper}>
                <Button variant='contained' sx={style.button} onClick={() => dispatch(increment())}><AddRoundedIcon /></Button>
                <Button variant='outlined' sx={{ ...style.button, color: '#1976d2' }} onClick={resetAll}><RestartAltRoundedIcon /></Button>
                <Button variant='contained' sx={style.button} onClick={() => dispatch(decrement())}><RemoveRoundedIcon /></Button>
            </Box>
            <OutlinedInput
                sx={style.addInput}
                placeholder='Сколько прибавить?'
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            sx={{color: '#1976d2'}}
                            onClick={() => dispatch(incrementByAmount(addValue))}
                        >
                            <AddRoundedIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Box>
    )
}
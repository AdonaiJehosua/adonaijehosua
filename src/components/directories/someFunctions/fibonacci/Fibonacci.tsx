import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {simpleFibonacci} from "./functions/simpleFibonacci";
import {nthFibonacci} from './functions/n-thFibonacci';

export function Fibonacci(): JSX.Element {
    const [text, setText] = useState<string | undefined>();
    const [nthFib, setNthFib] = useState<number>();
    const [fibNumber, setFibNumber] = useState<number>(1);
    const onSimpleHandler = () => setText(simpleFibonacci(20).join(' '))
    const onNthFibHandler = () => {setNthFib(nthFibonacci(fibNumber));}

    return (
        <div>
            <div>
                <h1>Простая последовательность 20 первых чисел</h1>
                <Button onClick={onSimpleHandler}>Сгенерировать</Button>
                <Typography>Последовательность: {text}</Typography>
            </div>
            <div>
                <h1>N-ное число Фибоначчи в интервале от 1 до 40</h1>
                <TextField InputProps={{ inputProps: { min: 1, max: 40 } }} type={'number'} value={fibNumber} onChange={(event) => setFibNumber(parseInt(event.target.value))}>Сгенерировать</TextField>
                <Button onClick={onNthFibHandler}>Показать {fibNumber}-е число</Button>
                <Typography>Число: {nthFib}</Typography>
            </div>
        </div>
    )
}

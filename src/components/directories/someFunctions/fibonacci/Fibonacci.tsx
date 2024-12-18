import {Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {simpleFibonacci} from "./functions/simpleFibonacci";
import {nthFibonacci} from './functions/n-thFibonacci';
import {getLastBigFibDigit} from './functions/lastDigit';
import {CopyBlock, a11yLight} from 'react-code-blocks';


console.log(simpleFibonacci.toString());

export function Fibonacci(): JSX.Element {
    const [fibArr, setFibArr] = useState<string | undefined>();
    const [fibArrLength, setFibArrLength] = useState<number>(1);
    const onFibArrHandler = () => setFibArr(simpleFibonacci(fibArrLength).join(' '))

    const [nthFib, setNthFib] = useState<number>();
    const [lastBigFibDigit, setLastBigFibDigit] = useState<number>();
    const onNthFibHandler = () => {
        setNthFib(nthFibonacci(fibNumber));
    }

    const [bigFibNumber, setBigFibNumber] = useState<number>(1);
    const [fibNumber, setFibNumber] = useState<number>(1);
    const onLastBigFibDigitHandler = () => {
        setLastBigFibDigit(getLastBigFibDigit(bigFibNumber));
    }

    return (
        <div>
            <div>
                <h1>Простая последовательность первых чисел</h1>
                <CopyBlock
                    theme={a11yLight}
                    language={'JavaScript'}
                    text={simpleFibonacci.toString()}
                    codeBlock
                />
                <TextField InputProps={{inputProps: {min: 1}}} type={'number'} value={fibArrLength}
                           onChange={(event) => setFibArrLength(parseInt(event.target.value))}></TextField>
                <Button onClick={onFibArrHandler}>Показать первые {fibArrLength} чисел последовательности</Button>
                <Typography>Последовательность: {fibArr}</Typography>
            </div>
            <div>
                <h1>N-ное число Фибоначчи в интервале от 1 до 40</h1>
                <CopyBlock
                    theme={a11yLight}
                    language={'JavaScript'}
                    text={nthFibonacci.toString()}
                    codeBlock
                />
                <TextField InputProps={{inputProps: {min: 1, max: 40}}} type={'number'} value={fibNumber}
                           onChange={(event) => setFibNumber(parseInt(event.target.value))}></TextField>
                <Button onClick={onNthFibHandler}>Показать {fibNumber}-е число</Button>
                <Typography>Число: {nthFib}</Typography>
            </div>
            <div>
                <h1>Последняя цифра большого числа Фибоначчи</h1>
                <CopyBlock
                    theme={a11yLight}
                    language={'JavaScript'}
                    text={getLastBigFibDigit.toString()}
                    codeBlock
                />
                <TextField InputProps={{inputProps: {min: 1}}} type={'number'} value={bigFibNumber}
                           onChange={(event) => setBigFibNumber(parseInt(event.target.value))}></TextField>
                <Button onClick={onLastBigFibDigitHandler}>Показать последнюю цифру {bigFibNumber}-го числа</Button>
                <Typography>Последняя цифра: {lastBigFibDigit}</Typography>
            </div>
        </div>
    )
}

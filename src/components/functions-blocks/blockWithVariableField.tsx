import {a11yLight, CodeBlock} from 'react-code-blocks';
import {Button, TextField, Typography} from '@mui/material';
import {useState} from 'react';

type BlockWithVariableFieldParams<T, U> = {
    title: string,
    resultTitle: string,
    startResultValue: T,
    startVariable: U,
    func: <T, U>(arg: T) => U,
}

export function BlockWithVariableField({title, resultTitle, func, startResultValue, startVariable}: BlockWithVariableFieldParams<string | number, number>): JSX.Element {

    const [result, setResult] = useState<typeof startResultValue>(startResultValue)
    const [variable, setVariable] = useState<typeof startVariable>(startVariable)
    const onClickHandler = () => setResult(func<number, string>(variable))

    return (
        <div>
            <h1>{title}</h1>
            <CodeBlock
                theme={a11yLight}
                language={'JavaScript'}
                text={func.toString()}
            />
            <TextField InputProps={{inputProps: {min: 1}}} type={'number'} value={variable}
                       onChange={(event) => setVariable(parseInt(event.target.value))}></TextField>
            <Button onClick={onClickHandler}>Рассчитать</Button>
            <Typography>{resultTitle}: {result}</Typography>
        </div>
    )
}

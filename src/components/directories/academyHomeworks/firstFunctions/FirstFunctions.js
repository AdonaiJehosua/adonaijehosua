import { Box, Typography, TextField, Button } from "@mui/material"
import React, { useState } from 'react'


const style = {
  functionContent: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export function FirstFunctions() {

  const [firstString, setFirstString] = useState('')
  const [firstMaxLength, setFirstMaxLength] = useState(NaN)
  const [firstResult, setFirstResult] = useState('')

  function isCorrectLength(inspectedString, maxLength) {
    return inspectedString.length <= maxLength;
  }

  const firstHandler = () => {
    setFirstResult(isCorrectLength(firstString, firstMaxLength) ? 'Влазит' : 'Не влазит')
  }

  function isPolyndrome(inspectedString) {
    const withoutSpasesLowerCase = inspectedString.toLowerCase().replaceAll(' ', '');
    return withoutSpasesLowerCase === withoutSpasesLowerCase.split('').reverse().join('');
  }

  function getDigits(string) {
    const searchNumber = [];
    string.toString().replaceAll(' ', '').split('').map((char) => (Number(char) && searchNumber.push(char)));
    return searchNumber.length > 0 ? Number(searchNumber.join('')) : NaN;
  }

  return (
    <Box>
      <Typography>1. Нужно больше функций</Typography>
      <Box sx={style.functionContent}>
        <Typography>проверка длины строки</Typography>
        <TextField
          label='Введите строку'
          onChange={e => setFirstString(e.target.value)}
        />
        <TextField
          label='Введите максимальную длину'
          type='number'
          onChange={e => setFirstMaxLength(e.target.value)}
        />
        <Button onClick={firstHandler}>Проверить</Button>
        <Typography>Результат: {firstResult}</Typography>
      </Box>
    </Box>
  )
}
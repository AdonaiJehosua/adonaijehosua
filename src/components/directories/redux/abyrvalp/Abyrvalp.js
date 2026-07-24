import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material"
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {getParams, selectInitialForm} from '@/components/directories/redux/abyrvalp/formSlice';
import {selectAllData} from '@/components/directories/redux/abyrvalp/abyrvalpSlice';


const style = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0'
    },
    title: {
        marginBottom: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginBottom: '10px',
        minWidth: '25vw',
        minValue: 1
    },
    addButton: {}
}

export function Abyrvalp() {

    const dispatch = useDispatch()

    const initialForm = useSelector(selectInitialForm)
    const data = useSelector(selectAllData)

    const [amount, setAmount] = useState(initialForm.amount)
    const [pagesAmount, setPagesAmount] = useState(initialForm.pagesAmount)
    const [pageWidth, setPageWidth] = useState(initialForm.pageWidth)
    const [pageLength, setPageLength] = useState(initialForm.pageLength)
    const [machine, setMachine] = useState(initialForm.machine)
    const [productType, setProductType] = useState(initialForm.productType)
    const [material, setMaterial] = useState(initialForm.paperType.name)
    const [colorFace, setColorFace] = useState(0)
    const [colorBack, setColorBack] = useState(0)

    const onAmountChange = e => setAmount(e.target.value)
    const onPagesAmountChange = e => setPagesAmount(e.target.value)
    const onPageWidthChange = e => setPageWidth(e.target.value)
    const onPageLengthChange = e => setPageLength(e.target.value)
    const onMachineChange = e => setMachine(e.target.value)
    const onProductTypeChange = e => setProductType(e.target.value)
    const onMaterialChange = e => setMaterial(e.target.value)
    const onColorFaceChange = e => setColorFace(e.target.value)
    const onColorBackChange = e => setColorBack(e.target.value)

    const renderMachines = data.machines.map(machine => (
        <MenuItem key={machine.id} sx={style.postWrapper} value={machine.id}>
            {machine.name}
        </MenuItem>
    ))

    const renderProductTypes = data.productTypes.map(type => (
        <MenuItem key={type.id} sx={style.postWrapper} value={type.id}>
            {type.name}
        </MenuItem>
    ))

    const renderMaterials = data.paperTypes.map(type => (
        <MenuItem key={type.id} sx={style.postWrapper} value={type.id}>
            {type.name}
        </MenuItem>
    ))

    const renderColoration = (n) => {
        const coloration = []
        for (let i = 0; i < n; i++) {
            coloration.push(i)
        }
        return (coloration.map(elem => (
            <MenuItem key={elem} sx={style.postWrapper} value={elem}>
                {elem}
            </MenuItem>)
        ))
    }

    const onButtonClick = () => {
        dispatch(getParams({amount: amount}))
    }

    return (
        <Box sx={style.wrapper}>
            Аномально быстрый расчет выполнения ахеренной листовой печати
            <Typography sx={style.title} variant='h6'>Тираж</Typography>
            <TextField
                sx={style.textField}
                type={'number'}
                value={amount}
                onChange={onAmountChange}
            />
            <Typography sx={style.title} variant='h6'>Количество страниц</Typography>
            <TextField
                sx={style.textField}
                type={'number'}
                value={pagesAmount}
                onChange={onPagesAmountChange}
            />
            <Typography sx={style.title} variant='h6'>Ширина страницы</Typography>
            <TextField
                sx={style.textField}
                type={'number'}
                value={pageWidth}
                onChange={onPageWidthChange}
            /><Typography sx={style.title} variant='h6'>Высота страницы</Typography>
            <TextField
                sx={style.textField}
                type={'number'}
                value={pageLength}
                onChange={onPageLengthChange}
            />
            <Typography sx={style.title} variant='h6'>Машина</Typography>
            <Select
                value={machine}
                sx={style.textField}
                onChange={onMachineChange}
            >
                {renderMachines}
            </Select>
            <Typography sx={style.title} variant='h6'>Изделие</Typography>
            <Select
                value={productType}
                sx={style.textField}
                onChange={onProductTypeChange}
            >
                {renderProductTypes}
            </Select>
            <Typography sx={style.title} variant='h6'>Бумага</Typography>
            <Select
                value={material}
                sx={style.textField}
                onChange={onMaterialChange}
            >
                {renderMaterials}
            </Select>
            <Typography sx={style.title} variant='h6'>Цветность лицо</Typography>
            <Select
                value={colorFace}
                sx={style.textField}
                onChange={onColorFaceChange}
            >
                {renderColoration(5)}
            </Select>
            <Typography sx={style.title} variant='h6'>Цветность оборот</Typography>
            <Select
                value={colorBack}
                sx={style.textField}
                onChange={onColorBackChange}
            >
                {renderColoration(5)}
            </Select>
            <Button onClick={onButtonClick}>Расчет</Button>
        </Box>
    )
}

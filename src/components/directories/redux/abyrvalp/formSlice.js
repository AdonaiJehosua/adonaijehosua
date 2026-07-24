import {createSlice} from '@reduxjs/toolkit';
import {machines, paperTypes, productTypes} from './constant';

const initialState = {
    amount: 0,
    machine: machines[0],
    paperFormat: machines[0].formats[0],
    pageWidth: 0,
    pageLength: 0,
    productType: productTypes[0],
    paperType: paperTypes[0],
    productAmount: 0,
    pagesAmount: 0,
    productWidth: 0,
    productLength: 0
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getParams(state, action) {
            console.log(state.amount)
            state.amount = action.payload.amount
            console.log(state.amount)
        }
    }
})

export const selectInitialForm = (state) => state.form

export const {getParams} = formSlice.actions;
export default formSlice.reducer

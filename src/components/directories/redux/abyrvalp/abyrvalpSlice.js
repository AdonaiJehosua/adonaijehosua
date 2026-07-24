import {createSlice} from '@reduxjs/toolkit';
import {machines, paperFormats, paperTypes, productTypes} from '@/components/directories/redux/abyrvalp/constant';

const initialState = {
    paperFormats: paperFormats,
    paperTypes: paperTypes,
    productTypes: productTypes,
    machines: machines
}



const abyrvalpSlice = createSlice({
    name: 'abyrvalp',
    initialState,
    reducers: {
    }
})

export const selectAllData = (state) => state.abyrvalp

export const {} = abyrvalpSlice.actions;
export default abyrvalpSlice.reducer

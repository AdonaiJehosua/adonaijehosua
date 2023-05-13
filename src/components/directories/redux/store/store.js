import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../simpleCounter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoReducer from "./todo/todoSlice.ts"
const reducers = combineReducers(
    {
        todo:todoReducer})
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
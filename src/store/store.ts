import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoReducer from "./todo/todoSlice.ts"
import authReducer from "./auth/authSlice.ts"
const reducers = combineReducers(
    {
        todo:todoReducer,
        auth:authReducer
    })
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
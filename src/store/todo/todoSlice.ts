import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types/types.tsx";


const initialState:Array<ITodo> = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoToFavorites:(state,action:PayloadAction<ITodo>)=>{
            state.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTodoToFavorites} = todoSlice.actions

export default todoSlice.reducer
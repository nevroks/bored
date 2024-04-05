import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFavoriteTodo} from "../../types/types.tsx";


const initialState:Array<IFavoriteTodo> = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleFavoritesTodo:(state,action:PayloadAction<IFavoriteTodo>)=>{
            const todo=action.payload
            if (state.find(favoritesTodo=>favoritesTodo.key===todo.key)){
                const index=state.indexOf(state.filter(favoriteTodo=>favoriteTodo.key===todo.key)[0])
                state.splice(index,1)
            }else{
                const todoToPush={...todo,favorite:true,addDate:Date.now()}
                state.push(todoToPush)
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {toggleFavoritesTodo} = todoSlice.actions

export default todoSlice.reducer
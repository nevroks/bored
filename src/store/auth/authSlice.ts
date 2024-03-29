import {createSlice} from '@reduxjs/toolkit'

interface initState{
    value:boolean
}
const initialState:initState = {
    value:false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth:(state,{payload})=>{
            state.value=payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setAuth} = authSlice.actions

export default authSlice.reducer
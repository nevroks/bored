import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface initState{
    accessibility:string,
    type:string,
    participants: string,
    price:string
}
const initialState:initState = {
    accessibility:'',
    type:"",
    participants: '',
    price:''
}


export const filterSettingsSlice = createSlice({
    name: 'filterSettings',
    initialState,
    reducers: {
        setFilterSettings:(state,{payload}:PayloadAction<initState>)=>{
            state=payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {setFilterSettings} = filterSettingsSlice.actions

export default filterSettingsSlice.reducer
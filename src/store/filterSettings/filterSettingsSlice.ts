import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IFilerSettingsState{
    accessibility:string,
    type:string,
    participants: string,
    price:string
}
const initialState:IFilerSettingsState = {
    accessibility:'',
    type:"",
    participants: '',
    price:''
}


export const filterSettingsSlice = createSlice({
    name: 'filterSettings',
    initialState,
    reducers: {
        setFilterSettings:(state,{payload}:PayloadAction<IFilerSettingsState>)=>{
            state.accessibility=payload.accessibility
            state.type=payload.type
            state.price=payload.price
            state.participants=payload.participants

        }
    }
})

// Action creators are generated for each case reducer function
export const {setFilterSettings} = filterSettingsSlice.actions

export default filterSettingsSlice.reducer
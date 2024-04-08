import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types/types.tsx";
import {IFilerSettingsState} from "../filterSettings/filterSettingsSlice.ts";

type FnProps={
        isFiltered:boolean,
        filterSettings:IFilerSettingsState
}

export const fetchSingleTodo=createAsyncThunk(
    "singleTodo/fetchSingleTodo",
    async function (props:FnProps,{rejectWithValue}){
        try {
        if (props.isFiltered){
            let url=`https://www.boredapi.com/api/activity?`
            let params=0
            if (props.filterSettings.participants.length>0){
                params=params+1
                url=url+`participants=${props.filterSettings.participants}`
            }
            if (props.filterSettings.type.length>0){
                if (params>=1){
                    url=url+`&type=${props.filterSettings.type}`
                }else{
                    url=url+`type=${props.filterSettings.type}`
                }
                params=params+1
            }
            if (props.filterSettings.price.length>0){
                let price=props.filterSettings.price.split("-")
                const maxPrice=price[0]
                const minPrice=price[1]
                if (params>=1){
                    url=url+`&minprice=${minPrice}&maxprice=${maxPrice}`
                }else{
                    url=url+`minprice=${minPrice}&maxprice=${maxPrice}`
                }
                params=params+1
            }
            if (props.filterSettings.accessibility.length>0){
                let accessibility=props.filterSettings.accessibility.split("-")
                const maxAccessibility=accessibility[0]
                const minAccessibility=accessibility[1]
                if (params>=1){
                    url=url+`&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`
                }else{
                    url=url+`minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`
                }
                params=params+1
            }

            const response=await fetch(url)

            if (response.status!=200){
                throw new Error(`Server Error,Try again status:${response.status}`)
            }else{
                return await response.json()
            }
        }else{
            const response=await fetch("https://www.boredapi.com/api/activity/")

            if (response.status!=200){
                throw new Error(`Server Error,Try again status:${response.status}`)
            }else{
                return await response.json()
            }
        }

        }catch (e){
            // @ts-ignore
            return rejectWithValue(e.massage)
        }

    }
)
interface initState {
    todo:ITodo,
    status:string | null,
    error:string | null
}

const initialState:initState = {
    // @ts-ignore
    todo:{
        activity:'',
        accessibility:0,
        type:"",
        participants: 0,
        price:0,
        key:0},
    status:null,
    error:null
}

export const singleTodoSlice = createSlice({
    name: 'singleTodo',
    initialState,
    reducers: {
        setTodo:(state,{payload}:PayloadAction<ITodo>)=>{
            state.todo=payload
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchSingleTodo.pending, (state) => {
            state.status = "loading";
            state.error=null
        })
            .addCase(fetchSingleTodo.fulfilled, (state,{payload}:PayloadAction<ITodo>) => {
                state.status="resolved"
                state.todo={...payload,favorite:false}
        })// @ts-ignore
            .addCase(fetchSingleTodo.rejected, (state,{payload}:PayloadAction<string>) => {
            state.status="rejected"
            state.error=payload
        })
    }
})

// Action creators are generated for each case reducer function
export const {setTodo} = singleTodoSlice.actions

export default singleTodoSlice.reducer
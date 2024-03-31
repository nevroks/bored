import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodo} from "../../types/types.tsx";

export const fetchSingleTodo=createAsyncThunk(
    "singleTodo/fetchSingleTodo",
    async function (_,{rejectWithValue}){
        try {
            const response=await fetch("http://www.boredapi.com/api/activity/")

            if (response.status!=200){
                throw new Error(`Server Error,Try again status:${response.status}`)
            }else{
                return await response.json()
            }
        }catch (error){
            return rejectWithValue(error.massage)
        }

    }
)
interface initState {
    todo:ITodo | {},
    status:string | null,
    error:string | null
}
const initialState:initState = {
    todo:{},
    status:null,
    error:null
}

export const singleTodoSlice = createSlice({
    name: 'singleTodo',
    initialState,
    reducers: {
        setTodo:(state,{payload})=>{
            state.todo=payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSingleTodo.pending, (state) => {
            state.status = "loading";
            state.error=null
        });
        builder.addCase(fetchSingleTodo.fulfilled, (state,{payload}:PayloadAction<ITodo>) => {
            state.status="resolved"
            state.todo=payload
        });
        builder.addCase(fetchSingleTodo.rejected, (state,{payload}:PayloadAction<string>) => {
            state.status="rejected"
            state.error=payload
        });
    }
})

// Action creators are generated for each case reducer function
export const {setTodo} = singleTodoSlice.actions

export default singleTodoSlice.reducer
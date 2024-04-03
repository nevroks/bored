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
export const setSingleTodo=createAsyncThunk(
    //Бесполезная хуета я и атк понима. но у редакса ошибка вылезает
    //с которой я ебался нахуй 2 дня и весь редакс перерыл
    "setSingleTodo/fetchSingleTodo",
    function (todo:ITodo,{dispatch}){
        dispatch(setTodo(todo))
    }
)
interface initState {
    todo:ITodo,
    status:string | null,
    error:string | null
}
const initialState:initState = {
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
            state.todo=payload
        })
            .addCase(fetchSingleTodo.rejected, (state,{payload}:PayloadAction<string>) => {
            state.status="rejected"
            state.error=payload
        })
    }
})

// Action creators are generated for each case reducer function
export const {setTodo} = singleTodoSlice.actions

export default singleTodoSlice.reducer
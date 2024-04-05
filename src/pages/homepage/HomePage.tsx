import React, {useEffect, useMemo, useState} from 'react';
import classes from "./style.module.css";
import {json, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import Button from "../../components/ui/button/Button.tsx";
import {setAuth} from "../../store/auth/authSlice.ts";
import UseGetData from "../../hooks/useGetData.ts";
import Todo from "../../components/todos/Todo.tsx";
import Filter from "../../components/filter/Filter.tsx";
import {fetchSingleTodo} from "../../store/singletodo/singleTodoSlice.ts";
import PopUp from "../../components/ui/popUp/PopUp.tsx";

const HomePage = () => {
    const navigate=useNavigate()
    const isAuthorized=useAppSelector(state => state.auth.value)
    const todo=useAppSelector(state => state.singleTodo.todo)
    const filterSettings=useAppSelector(state => state.filterSettings)
    const [isFilterShown,setIsFilterShown]=useState(false)
    const [isFiltered,setIsFiltered]=useState(false)
    const dispatch=useAppDispatch()

    useEffect(()=>{
        if (isAuthorized===false){
            navigate("/login")
        }
    },[isAuthorized])
    const handleRequest=()=>{
        dispatch(fetchSingleTodo({isFiltered,filterSettings}))
    }
    // Init
    useEffect(()=>{
        dispatch(fetchSingleTodo())
    },[])
    return (
        <div className={classes.page__content}>
            <div>
                <Button onClick={()=>setIsFilterShown(true)}>Фильтр</Button>
                <Button onClick={handleRequest}>Запросить туду</Button>
            </div>
            {isFilterShown && <PopUp offerFunc={setIsFilterShown}>
                <Filter setIsFiltered={setIsFiltered}/>
            </PopUp>}
            {todo && <Todo todo={todo}/>}
        </div>
    );
};

export default HomePage;
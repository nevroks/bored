import React, {useEffect, useMemo, useState} from 'react';
import classes from "./style.module.css";
import {json, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import Button from "../../components/ui/button/Button.tsx";
import Todo from "../../components/todos/Todo.tsx";
import Filter from "../../components/filter/Filter.tsx";
import {fetchSingleTodo} from "../../store/singletodo/singleTodoSlice.ts";
import PopUp from "../../components/ui/popUp/PopUp.tsx";

const HomePage = () => {
    const navigate=useNavigate()
    const isAuthorized=useAppSelector(state => state.auth.value)
    const todo=useAppSelector(state => state.singleTodo)
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
            <div className={classes.navigation}>
                <Button onClick={()=>setIsFilterShown(true)}>Фильтр</Button>
                <Button disabled={todo.status==="loading"} onClick={handleRequest}>Запросить туду{isFiltered && "(модиф)"}</Button>
            </div>
            {isFilterShown && <PopUp offerFunc={setIsFilterShown}>
                <Filter setIsFiltered={setIsFiltered}/>
            </PopUp>}
            <div className={classes.todo}>
                <h2>Текущая задача:</h2>
                {todo.status==="loading" ? <h2>Loading...</h2> : <Todo todo={todo.todo}/>}
            </div>

        </div>
    );
};

export default HomePage;
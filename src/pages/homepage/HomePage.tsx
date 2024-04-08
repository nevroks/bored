import {useEffect, useRef, useState} from 'react';
import classes from "./style.module.css";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import Button from "../../components/ui/button/Button.tsx";
import Todo from "../../components/todos/Todo.tsx";
import Filter from "../../components/filter/Filter.tsx";
import {fetchSingleTodo} from "../../store/singletodo/singleTodoSlice.ts";
import PopUp from "../../components/ui/popUp/PopUp.tsx";
import Instruction from "../../components/instruction/Instruction.tsx";

const HomePage = () => {
    const navigate=useNavigate()
    const isAuthorized=useAppSelector(state => state.auth.value)
    const todo=useAppSelector(state => state.singleTodo)
    const filterSettings=useAppSelector(state => state.filterSettings)
    const [isFilterShown,setIsFilterShown]=useState(false)
    const [isFiltered,setIsFiltered]=useState(false)
    const [isGuideUnChecked,setIsGuideUnChecked]=useState(true)
    const countOfRenders=useRef(0)
    const dispatch=useAppDispatch()

    useEffect(()=>{
        if (isAuthorized===false){
            navigate("/login")
        }
    },[isAuthorized])
    const handleRequest=()=>{
        dispatch(fetchSingleTodo({isFiltered,filterSettings}))
    }
    useEffect(()=>{
        // @ts-ignore
        if (JSON.parse(localStorage.getItem("checked"))!=null){
            if (countOfRenders.current===0){
                // @ts-ignore
                setIsGuideUnChecked(JSON.parse(localStorage.getItem("checked")))
            }
            countOfRenders.current++
        }

        localStorage.setItem("checked",JSON.stringify(isGuideUnChecked))
        if(!isGuideUnChecked){
            document.body.style.overflow="auto"
            document.body.style.paddingRight = "0"
        }else{
            document.body.style.overflow="hidden"
            document.body.style.paddingRight = "15px"
        }
    },[isGuideUnChecked])
    // Init
    useEffect(()=>{

        // @ts-ignore
        dispatch(fetchSingleTodo())
    },[])
    // @ts-ignore
    return (
        <div className={classes.page__content}>
            <div className={classes.navigation}>
                <Button onClick={()=>setIsFilterShown(true)}>Фильтр</Button>
                <Button disabled={todo.status==="loading"} onClick={handleRequest}>Запросить туду{isFiltered && "(модиф)"}</Button>
            </div>
            {isFilterShown && <PopUp type={"popUp"} offerFunc={setIsFilterShown}>
                <Filter setIsFiltered={setIsFiltered}/>
            </PopUp>}
            {isGuideUnChecked && <PopUp type={"instruction"} offerFunc={setIsGuideUnChecked}>
                <Instruction/>
            </PopUp>}
            <div className={classes.todo}>
                <h2>Текущая задача:</h2>
                {/*@ts-ignore*/}
                {todo.status==="loading" ? <h2>Loading...</h2> : <Todo todo={todo.todo}/>}
            </div>

        </div>
    );
};

export default HomePage;
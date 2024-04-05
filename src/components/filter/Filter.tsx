import {useEffect, useMemo, useRef, useState} from 'react';
import Button from "../ui/button/Button.tsx";
import Input from "../ui/input/Input.tsx";
import classes from "./style.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import CompareObjects from "../../utils/compareObjects.ts";
import {PriceRange} from "../../consts/priceRange.ts";
import {AcessibilityRange} from "../../consts/acessibilityRange.ts";
import {fetchSingleTodo, setSingleTodo, setTodo} from "../../store/singletodo/singleTodoSlice.ts";
import {setFilterSettings} from "../../store/filterSettings/filterSettingsSlice.ts";

const Filter = ({setIsFiltered}) => {
    const dispatch=useAppDispatch()
    const filterSettings =useAppSelector(state => state.filterSettings)

    // ------------------------------------------
    //Управляемые инпуты и поля фильтра

    const [inputsValue,setInputsValue]=useState(
        {
            accessibility:'',
            type:"",
            participants: '',
            price:''
        }
    )
    //Управляемые инпуты и поля фильтра
    // ------------------------------------------

    useEffect(()=>{
        const emptySettings={
            accessibility:'',
            type:"",
            participants: '',
            price:''
        }
        if (CompareObjects(emptySettings,filterSettings)){
            setIsFiltered(false)
        }else{
            setIsFiltered(true)
        }
    },[filterSettings])

    function handleApply(){
        dispatch(setFilterSettings(inputsValue))
    }
    return (
        <div className={classes.filter}>
            <label htmlFor="accessibility">Сортировка по доступности:
                <select
                    onChange={e => setInputsValue({...inputsValue,accessibility:e.target.value})}
                    value={inputsValue.accessibility}
                    defaultValue={''} name="accessibility" id="accessibility">
                    <option value="">Не узакано</option>
                    <option value={`${AcessibilityRange.max.maxValue}-${AcessibilityRange.max.minValue}`}>Максимальная</option>
                </select>
            </label>
            <label htmlFor="type">Сортировка по типу:
                <select
                    onChange={e => setInputsValue({...inputsValue,type:e.target.value})}
                    value={inputsValue.type}
                    defaultValue={''} name="type" id="type">
                    <option value="">Не узакано</option>
                </select>
            </label>
            <label htmlFor="price">Сортировка по цене:
                <select
                    onChange={e => setInputsValue({...inputsValue,price:e.target.value})}
                    value={inputsValue.price}
                    defaultValue={''} name="price" id="price">
                    <option value="">Не узакано</option>
                    <option value={`${PriceRange.free.maxValue}-${PriceRange.free.minValue}`}>Бесплатно</option>
                </select>
            </label>
            <label htmlFor="price">Сортировка по количеству участников:
                <Input
                    type={'number'}
                    onChange={e => setInputsValue({...inputsValue,participants:e.target.value})}
                    value={inputsValue.participants}
                    placeholder={"Не указано"}/>
            </label>
            <div className={classes.filter_btns}>
                <Button onClick={handleApply}>Применить</Button>
                <Button>Сбросить всё</Button>
            </div>
        </div>
    );
};

export default Filter;
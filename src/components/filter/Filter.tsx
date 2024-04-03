import {useEffect, useMemo, useState} from 'react';
import Button from "../ui/button/Button.tsx";
import Input from "../ui/input/Input.tsx";
import classes from "./style.module.css";
import {useAppDispatch} from "../../hooks/reduxHooks.tsx";
import CompareObjects from "../../utils/compareObjects.ts";
import {PriceRange} from "../../consts/priceRange.ts";
import {AcessibilityRange} from "../../consts/acessibilityRange.ts";
import {setSingleTodo, setTodo} from "../../store/singletodo/singleTodoSlice.ts";

const Filter = ({setIsFiltered}) => {
    const dispatch=useAppDispatch()

    const [todo,setTodo]=useState({})
    // ------------------------------------------
    //Управляемые инпуты и поля фильтра
    const [filterSettings,setFilterSettings]=useState({
        accessibility:'',
        type:"",
        participants: '',
        price:''
    })
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

    // Честно это пизедц всё какойто

    // ------------------------------------------
    //Получение url филтра на уровне api
    const url=useMemo(()=>{
        let url=`http://www.boredapi.com/api/activity?`
        let params=0
        if (filterSettings.participants.length>0){
            params=params+1
            url=url+`participants=${filterSettings.participants}`
        }
        if (filterSettings.type.length>0){
            if (params>=1){
                url=url+`&type=${filterSettings.type}`
            }else{
                url=url+`type=${filterSettings.type}`
            }
            params=params+1
        }
        if (filterSettings.price.length>0){
            let price=filterSettings.price.split("-")
            const maxPrice=price[0]
            const minPrice=price[1]
            if (params>=1){
                url=url+`&minprice=${minPrice}&maxprice=${maxPrice}`
            }else{
                url=url+`minprice=${minPrice}&maxprice=${maxPrice}`
            }
            params=params+1
        }
        if (filterSettings.accessibility.length>0){
            let accessibility=filterSettings.accessibility.split("-")
            const maxAccessibility=accessibility[0]
            const minAccessibility=accessibility[1]
            if (params>=1){
                url=url+`&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`
            }else{
                url=url+`minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`
            }
            params=params+1
        }
        return url
    },[filterSettings])
    //Получение url филтра на уровне api
    // ------------------------------------------

    // ------------------------------------------
    //Получение todo уже с фильтром
    const getTodo=async ()=>{
        try {
            const response=await fetch(url)

            if (response.status!=200){
                throw new Error(`Server Error,Try again status:${response.status}`)
            }else{
                const data = await response.json()
                setTodo(data)
            }
        }catch (error){
            console.log(error.massage)
        }
    }
    //Получение todo уже с фильтром
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
        setFilterSettings(inputsValue)
        getTodo()

    }
    useEffect(()=>{
        dispatch(setSingleTodo(todo))
    },[todo])
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
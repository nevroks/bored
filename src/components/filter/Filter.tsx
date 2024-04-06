import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import Button from "../ui/button/Button.tsx";
import Input from "../ui/input/Input.tsx";
import classes from "./style.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import CompareObjects from "../../utils/compareObjects.ts";
import {PriceRange} from "../../consts/priceRange.ts";
import {AcessibilityRange} from "../../consts/acessibilityRange.ts";
import {IFilerSettingsState, setFilterSettings} from "../../store/filterSettings/filterSettingsSlice.ts";

type filterFCProps={
    setIsFiltered:Dispatch<SetStateAction<boolean>>
}

const Filter:FC<filterFCProps> = ({setIsFiltered}) => {
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
    const emptySettings:IFilerSettingsState={
        accessibility:'',
        type:"",
        participants: '',
        price:''
    }
    useEffect(()=>{
        if (CompareObjects(emptySettings,filterSettings)){
            setIsFiltered(false)
        }else{
            setIsFiltered(true)
        }
    },[filterSettings])

    function handleApply(){
        dispatch(setFilterSettings(inputsValue))
    }
    function handleCancel(){
        dispatch(setFilterSettings(emptySettings))
        setInputsValue(emptySettings)
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
                    <option value={`${AcessibilityRange.big.maxValue}-${AcessibilityRange.big.minValue}`}>Большая</option>
                    <option value={`${AcessibilityRange.mid.maxValue}-${AcessibilityRange.mid.minValue}`}>Средняя</option>
                    <option value={`${AcessibilityRange.little.maxValue}-${AcessibilityRange.little.minValue}`}>Маленькая</option>
                </select>
            </label>
            <label htmlFor="type">Сортировка по типу:
                <select
                    onChange={e => setInputsValue({...inputsValue,type:e.target.value})}
                    value={inputsValue.type}
                    defaultValue={''} name="type" id="type">
                    <option value="">Не узакано</option>
                    <option value="cooking">Готовка</option>
                    <option value="education">Образование</option>
                    <option value="recreational">Развлечения</option>
                    <option value="social">Социальное</option>
                    <option value="diy">Рукоблудие</option>
                    <option value="charity">Благотворительное</option>
                    <option value="relaxation">Отдых</option>
                    <option value="music">Музыка</option>
                    <option value="busywork">Рутина</option>
                </select>
            </label>
            <label htmlFor="price">Сортировка по цене:
                <select
                    onChange={e => setInputsValue({...inputsValue,price:e.target.value})}
                    value={inputsValue.price}
                    defaultValue={''} name="price" id="price">
                    <option value="">Не узакано</option>
                    <option value={`${PriceRange.free.maxValue}-${PriceRange.free.minValue}`}>Бесплатно</option>
                    <option value={`${PriceRange.almostFree.maxValue}-${PriceRange.almostFree.minValue}`}>Почти бесплатно</option>
                    <option value={`${PriceRange.mid.maxValue}-${PriceRange.mid.minValue}`}>Средне</option>
                    <option value={`${PriceRange.expensive.maxValue}-${PriceRange.expensive.minValue}`}>Дорого</option>
                </select>
            </label>
            <label>Сортировка по количеству участников:
                <Input
                    type={'number'}
                    onChange={e => setInputsValue({...inputsValue,participants:e.target.value})}
                    value={inputsValue.participants}
                    placeholder={"Не указано"}/>
            </label>
            <div className={classes.filter_btns}>
                <Button onClick={handleApply}>Применить</Button>
                <Button onClick={handleCancel}>Сбросить всё</Button>
            </div>
        </div>
    );
};

export default Filter;
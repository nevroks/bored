import {useEffect, useState} from 'react';
import Button from "../ui/button/Button.tsx";
import Input from "../ui/input/Input.tsx";
import classes from "./style.module.css";
import {useAppDispatch} from "../../hooks/reduxHooks.tsx";

const Filter = () => {
    const dispatch=useAppDispatch()
    const [isFiltered,setIsFiltered]=useState(false)
    const [filterSettings,setfilterSettings]=useState({
        accessibility:'',
        type:"",
        participants: '',
        price:''
    })
    console.log(isFiltered)
    return (
        <div className={classes.filter}>
            <label htmlFor="accessibility">Сортировка по доступности:
                <select
                    onChange={e => setfilterSettings({...filterSettings,accessibility:e.target.value})}
                    value={filterSettings.accessibility}
                    defaultValue={'none'} name="accessibility" id="accessibility">
                    <option value="none">Не узакано</option>
                    <option value="0-0">Максимальная</option>
                </select>
            </label>
            <label htmlFor="type">Сортировка по типу:
                <select
                    onChange={e => setfilterSettings({...filterSettings,type:e.target.value})}
                    value={filterSettings.type}
                    defaultValue={'none'} name="type" id="type">
                    <option value="none">Не узакано</option>
                </select>
            </label>
            <label htmlFor="price">Сортировка по цене:
                <select
                    onChange={e => setfilterSettings({...filterSettings,price:e.target.value})}
                    value={filterSettings.price}
                    defaultValue={'none'} name="price" id="price">
                    <option value="none">Не узакано</option>
                </select>
            </label>
            <label htmlFor="price">Сортировка по количеству участников:
                <Input
                    onChange={e => setfilterSettings({...filterSettings,participants:e.target.value})}
                    value={filterSettings.participants}
                    placeholder={"Не указано"}/>
            </label>
            <div className={classes.filter_btns}>
                <Button>Применить</Button>
                <Button>Сбросить всё</Button>
            </div>
        </div>
    );
};

export default Filter;
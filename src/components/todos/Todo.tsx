import {FC} from 'react';
import {IFavoriteTodo, ITodo} from "../../types/types.tsx";
import {PriceRange} from "../../consts/priceRange.ts";
import {AcessibilityRange} from "../../consts/acessibilityRange.ts";
import classes from "./style.module.css";
import {IoIosHeartEmpty} from "react-icons/io";
import {IoHeartSharp} from "react-icons/io5";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import {toggleFavoritesTodo} from "../../store/todos/todoSlice.ts";
import getDateFromNumber from './../../utils/getDateFromNumber.ts'
type todoProps={
    todo: IFavoriteTodo
}

const Todo: FC<todoProps> = ({todo}) => {

    const dispatch=useAppDispatch()
    const favoriteTodosList=useAppSelector(state => state.todo)

    const isFavorite=(todo:ITodo)=>{
        return favoriteTodosList.find(favoritesTodo=>favoritesTodo.key===todo.key)
    }

    const handleToggle=()=>{
        dispatch(toggleFavoritesTodo(todo))
    }
    return (
        <div className={classes.todo}>
            <div className={classes.todo_heart}>{isFavorite(todo)? <IoHeartSharp onClick={handleToggle}/> : <IoIosHeartEmpty onClick={handleToggle}/>}</div>
            <p>Что делать:{todo.activity}</p>
            <p>Доступность:{todo.accessibility === AcessibilityRange.max.maxValue  ? "Максимальная" : todo.accessibility < AcessibilityRange.big.maxValue ? "Большая" : todo.accessibility < AcessibilityRange.mid.maxValue ? "Средняя" : "Малая"}</p>
            <p>Тип:{todo.type}</p>

            <p>Цена:{todo.price === PriceRange.free.maxValue ? "Бесплатно" : todo.price < PriceRange.almostFree.maxValue ? "Недорого" : todo.price < PriceRange.mid.maxValue ? "Средне" : "Дорого"}</p>
            <p>Кол-во людей:{todo.participants}</p>
            {/*Если отображается как избранное*/}
            {todo.addDate && <div>Дата добавления:{getDateFromNumber(todo.addDate)}</div>}
        </div>
    );
};

export default Todo;
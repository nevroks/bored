import React, {FC} from 'react';
import {ITodo} from "../../types/types.tsx";

type todoProps={
    todo:ITodo
}
import {PriceRange} from "../../consts/priceRange.ts";
import {AcessibilityRange} from "../../consts/acessibilityRange.ts";
const Todo: FC<todoProps> = ({todo}) => {
    return (
        <div>
            <p>Что делать:{todo.activity}</p>
            <p>Доступность:{todo.accessibility === AcessibilityRange.max.maxValue  ? "Максимальная" : todo.accessibility < AcessibilityRange.big.maxValue ? "Большая" : todo.accessibility < AcessibilityRange.mid.maxValue ? "Средняя" : "Малая"}</p>
            <p>Тип:{todo.type}</p>

            <p>Цена:{todo.price === PriceRange.free.maxValue ? "Бесплатно" : todo.price < PriceRange.almostFree.maxValue ? "Недорого" : todo.price < PriceRange.mid.maxValue ? "Средне" : "Дорого"}</p>
            <p>Кол-во людей:{todo.participants}</p>
        </div>
    );
};

export default Todo;
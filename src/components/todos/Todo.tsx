import React, {FC} from 'react';
import {ITodo} from "../../types/types.tsx";

type todoProps={
    todo:ITodo
}

const Todo: FC<todoProps> = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <p>Что делать:{todo.activity}</p>
            <p>Доступность:{todo.accessibility === 0 ? "Максимальная" : todo.accessibility < 0.4 ? "Большая" : todo.accessibility < 0.7 ? "Средняя" : "Малая"}</p>
            <p>Тип:{todo.type}</p>

            <p>Цена:{todo.price === 0 ? "Бесплатно" : todo.price < 0.4 ? "Недорого" : todo.price < 0.7 ? "Средне" : "Дорого"}</p>
            <p>Кол-во людей:{todo.participants}</p>
        </div>
    );
};

export default Todo;
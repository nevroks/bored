import {FC} from 'react';
import Todo from "./Todo.tsx";
import {IFavoriteTodo} from "../../types/types.tsx";
import classes from "./style.module.css";

type ListPropsType={
    todos:IFavoriteTodo[]
}

const TodosList:FC<ListPropsType> = ({todos}) => {
    return (
        <div className={classes.todoList}>
            {todos.map(todo=>
            <Todo todo={todo}/>
            )}
        </div>
    );
};

export default TodosList;
import classes from "./style.module.css";
import Button from "../../components/ui/button/Button.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import {setAuth} from "../../store/auth/authSlice.ts";
import TodosList from "../../components/todos/TodosList.tsx";

const ProfilePage = () => {
    const todos=useAppSelector(state => state.todo)
    return (
        <div className={classes.page__content}>
            <div>Настройки для профиля</div>
            <div>
                Список избранных:
                <TodosList todos={todos}/>
            </div>
        </div>
    );
};

export default ProfilePage;
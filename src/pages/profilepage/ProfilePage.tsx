import classes from "./style.module.css";
import Button from "../../components/ui/button/Button.tsx";
import {useAppSelector} from "../../hooks/reduxHooks.tsx";
import TodosList from "../../components/todos/TodosList.tsx";
import Input from "../../components/ui/input/Input.tsx";
import {useEffect, useState} from "react";
import {IUser} from "../../types/types.tsx";
import checkPassword from "../../utils/checkPassword.ts";

const ProfilePage = () => {
    const todos=useAppSelector(state => state.todo)
    const [user,setUser]=useState<IUser>({
        name:'',
        password:''
    })
    useEffect(()=>{
        // @ts-ignore
        setUser(JSON.parse(localStorage.getItem("user")))
    },[])
    function handleApply(){
        if (user.name.length<5 || user.password.length<5){
            alert("Проверьте пароль или логин на длинну(Минимальная 5)")
            return
        }
        const isPasswordCorrect=checkPassword(user.password)
        if (!isPasswordCorrect){
            alert("Проверьте пароль на наличие цифр в нём")
            return;
        }
        localStorage.setItem("user",JSON.stringify(user))
        alert("Пользователь успешно обновлён")
    }
    return (
        <div className={classes.page__content}>
            <div>
                <p>Настройки для профиля:</p>
                <div className={classes.userProfile}>
                    <label>Ваш логин:<Input
                        onChange={e => setUser({...user,name:e.target.value})}
                        placeholder={`${user.name}`}/></label>
                    <label>Ваш пароль:<Input
                        onChange={e => setUser({...user,password:e.target.value})}
                        placeholder={`${user.password}`}/></label>
                    <Button onClick={handleApply}>Применить изменения</Button>
                </div>
            </div>
            <div className={classes.todos}>
                <p style={{marginBottom:'12px'}}>Список избранных:</p>
                <TodosList todos={todos}/>
            </div>
        </div>
    );
};

export default ProfilePage;
import React, {useState} from 'react';
import classes from "./style.module.css";
import Button from "../../components/ui/button/Button.tsx";
import Input from "../../components/ui/input/Input.tsx";
import checkPassword from "../../utils/checkPassword.ts"
import {IUser} from "../../types/types.tsx";
import {json} from "react-router-dom";

const LoginPage = () => {
    const [userData,setUserData]=useState({
        name:"",
        password:""
    })
    const acceptHandler=()=>{
        if (userData.name.length<5 || userData.password.length<5){
            alert("Проверьте пароль или логин на длинну(Минимальная 5)")
            return
        }

        const isPasswordCorrect=checkPassword(userData.password)
        if (!isPasswordCorrect){
            alert("Проверьте пароль на наличие цифр в нём")
            return;
        }
        localStorage.setItem("user",JSON.stringify(userData))
        location.reload()
    }
    return (
        <div className={classes.page}>
            <div className={classes.page__content}>
                <Input
                    value={userData.name}
                    onChange={e => setUserData({...userData,name:e.target.value})}
                    type={"text"} placeholder={"Введите имя"}/>
                <Input
                    value={userData.password}
                    onChange={e => setUserData({...userData,password:e.target.value})}
                    type={"password"} placeholder={"Введите пароль"}/>
                <Button onClick={acceptHandler}>Создать аккаунт</Button>
            </div>
        </div>
    );
};

export default LoginPage;
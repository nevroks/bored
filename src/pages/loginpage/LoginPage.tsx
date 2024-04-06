import {useState} from 'react';
import classes from "./style.module.css";
import Button from "../../components/ui/button/Button.tsx";
import Input from "../../components/ui/input/Input.tsx";
import checkPassword from "../../utils/checkPassword.ts"
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import {setAuth} from "../../store/auth/authSlice.ts";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const navigate=useNavigate()
    const isAuth=useAppSelector(state => state.auth.value)
    const [userData,setUserData]=useState({
        name:"",
        password:""
    })
    const dispatch=useAppDispatch()
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
        dispatch(setAuth(true))
        navigate("/")
    }
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div className={classes.page}>
            {isAuth ?
                <div>
                    <Button onClick={handleBack}><IoIosArrowRoundBack/>Назад</Button>
                    <p style={{marginTop:"20px"}}>Вы уже зарагестрированы</p>
                </div>
                :
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
                </div>}

        </div>
    );
};

export default LoginPage;
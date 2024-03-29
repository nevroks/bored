import React, {FC} from 'react';
import classes from "./style.module.css";

interface InputProps {
    placeholder:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    type?:string,
    value?:string
}
const Input:FC<InputProps> = ({placeholder,...props}) => {

    return (
        <input className={classes.input} {...props} placeholder={placeholder} />
    );
};

export default Input;
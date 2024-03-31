import {Dispatch, FC, ReactChild, ReactNode, SetStateAction} from 'react';
import classes from "./style.module.css";

type popUpProps ={
    children: ReactChild| ReactNode
    offerFunc:Dispatch<SetStateAction<boolean>>
}

const PopUp:FC<popUpProps> = ({children,offerFunc}) => {
    const hidePopUp=()=>{
        offerFunc(false)
    }
    return (
        <div onClick={hidePopUp} className={classes.popup_wrapper}>
            <div onClick={e => e.stopPropagation()} className={classes.popup_content}>
                {children}
            </div>

        </div>
    );
};

export default PopUp;
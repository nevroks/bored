import {Dispatch, FC, ReactChild, ReactNode, SetStateAction} from 'react';
import classes from "./style.module.css";

type popUpProps ={
    children: ReactChild| ReactNode
    type:"popUp"|"instruction"
    offerFunc:Dispatch<SetStateAction<boolean>>
}

const PopUp:FC<popUpProps> = ({children,offerFunc,type}) => {
    const hidePopUp=()=>{
        offerFunc(false)
    }
    switch (type){
        case "popUp":
            return (
                <div onClick={hidePopUp} className={classes.popup_wrapper}>
                    <div onClick={e => e.stopPropagation()} className={classes.popup_content}>
                        {children}
                    </div>
                </div>
            );
        case "instruction":
            return (
                <div onClick={hidePopUp} className={classes.instruction_wrapper}>
                        {children}
                </div>
            );

    }

};

export default PopUp;
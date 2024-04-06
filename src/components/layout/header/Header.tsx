import classes from "./style.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <header className={classes.header}>
                <h2>Logo</h2>
                <nav className={classes.header__navigation}>
                    <NavLink to={"/"}>Страница подбора</NavLink>
                    <NavLink to={"/profile"}>Профиль</NavLink>
                </nav>
            </header>
    );
};

export default Header;
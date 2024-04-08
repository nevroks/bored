import {Suspense} from 'react';
import classes from "./style.module.css";
import {Outlet} from "react-router-dom";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

const Layout = () => {
    return (
        <div className={classes.layoutS}>
            <Header/>
            <div className={classes.page}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet/>
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
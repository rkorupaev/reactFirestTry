import React from "react";
import {NavLink} from "react-router-dom";
import style from "./LoginBLock.module.css";

const LoginBlock = () => {
    return (
        <div className={style.loginBlock}>
            <NavLink to="/login/">Войти</NavLink>
        </div>
    );
}

export default LoginBlock;

import React from "react";
import {NavLink} from "react-router-dom";
import style from "./LoginBLock.module.css";

const LoginBlock = (props) => {
    return (
        <div>
            {props.isLogged === true ?
                <div>
                    <h2>{props.loggedUserName}</h2>
                    <p>{props.loggedUserEmail}</p>
                    <button onClick={props.logOut}>Logout</button>
                </div>
                :
                <div className={style.loginBlock}>
                    <NavLink to="/login/">Войти</NavLink>
                </div>
            }
        </div>
    );

}

export default LoginBlock;

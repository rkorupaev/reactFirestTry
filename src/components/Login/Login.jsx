import React from "react";
import style from "./Login.module.css";
import {Form, Field} from "react-final-form";

const onSubmit = (values) => {
    console.log(values);
}

const LoginForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, values}) => (
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <label>Login: <Field name={"login"} placeholder={"Login"} component={"input"} type={"text"}/></label>
                <label>Password: <Field name={"password"} placeholder={"Password"} component={"input"}
                                        type={"text"}/></label>
                <label>Remember me: <Field name={"remembered"} type={"checkbox"} component={"input"}/></label>
                <button className={style.loginForm__button} type={"submit"}>Register!</button>
            </form>
        )}
    />
)

const Login = () => {
    return (
        <div>
            <h2>Войти в соц. сеть</h2>
            <LoginForm/>
        </div>
    );
}

export default Login;

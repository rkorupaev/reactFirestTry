import React from "react";
import style from "./Login.module.css";
import {Form, Field} from "react-final-form";
import {required} from "../Assets/Validators/Validators";
import {Input} from "../Forms/Forms";

const onSubmit = (values) => {
    console.log(values);
}

const LoginForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, values}) => (
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <label>Login: <Field name={"login"} placeholder={"Login"} component={Input} type={"text"} validate={required}/></label>
                <label>Password: <Field name={"password"} placeholder={"Password"} component={Input}
                                        type={"text"} validate={required}/></label>
                <label>Remember me: <Field name={"remembered"} type={"checkbox"} component={Input}/></label>
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

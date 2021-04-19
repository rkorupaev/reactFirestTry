import React from "react";
import style from "./Login.module.css";
import {Form, Field} from "react-final-form";


const LoginForm = () => {
    <Form onSubmit={onSubmit}>
        {props => (
            <form onSubmit={props.handleSubmit}>

                <label>Login: <Field name={"login"} placeholder={"Login"} component={"input"} type={"text"}/></label>
                <label>Password: <Field name={"password"} placeholder={"Password"} component={"input"}
                                        type={"text"}/></label>
                <label>Remember me: <Field name={"remembered"} type={"checkbox"} component={"input"}/></label>
                <button className={style.loginForm__button} type={"submit"}>Register!</button>

                <button type="submit">Submit</button>
            </form>
        )}
    </Form>
}

const Login = () => {
    return (
        <div>
            <h2>Войти в соц. сеть</h2>
            <LoginForm/>
        </div>
    );
}

export default Login;

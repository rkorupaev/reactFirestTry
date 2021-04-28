import React, {useState} from "react";
import style from "./Login.module.css";
import {Form, Field} from "react-final-form";
import {required} from "../Assets/Validators/Validators";
import {Input} from "../Forms/Forms";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit, values}) => (
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <label>Login: <Field name={"email"} placeholder={"Email"} component={Input} type={"text"}
                                     validate={required}/></label>
                <label>Password: <Field name={"password"} placeholder={"Password"} component={Input}
                                        type={"password"} validate={required}/></label>
                <label>Remember me: <Field name={"remembered"} type={"checkbox"} component={Input}/></label>
                <button className={style.loginForm__button} type={"submit"}>Enter Network</button>
            </form>
        )}
    />
)

const Login = (props) => {
    const onSubmit = (values) => {
        props.logIn(values.email, values.password, values.rememberMe);
    }

    if (props.isLogged) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h2>Войти в соц. сеть</h2>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}

export default connect(mapStateToProps, {logIn, logOut})(Login);

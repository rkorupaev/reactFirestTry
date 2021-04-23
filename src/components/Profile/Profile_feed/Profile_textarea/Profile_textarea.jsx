import React from "react";
import style from "../../../Login/Login.module.css";
import {Field, Form} from "react-final-form";

const ProfileTextareaForm = (props) => {

    let onSubmit = (values) => {
        props.onButtonClickHandler(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, values, reset}) => (
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <label>Текст поста</label>
                    <Field name="post" component="textarea" placeholder="Что у вас нового?"/>
                    <button className={style.loginForm__button} type={"submit"}>Post</button>
                </form>
            )}
        />
    );
}

const ProfileTextarea = (props) => {
    return (
        <div>
            <ProfileTextareaForm onButtonClickHandler={props.onButtonClickHandler}/>
        </div>
    );
}

export default ProfileTextarea;

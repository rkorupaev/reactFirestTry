import React from "react";
import style from "../../../Login/Login.module.css";
import {Field, Form} from "react-final-form";
import {Textarea} from "../../../Forms/Forms";
import {setMaxLength} from "../../../Assets/Validators/Validators";

const ProfileTextareaForm = (props) => {

    let onSubmit = (values) => {
        props.onButtonClickHandler(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, values, reset}) => (
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <label>Текст поста:</label>
                    <Field name="post" component={Textarea} placeholder="Что у вас нового?" validate={setMaxLength(150)}/>
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

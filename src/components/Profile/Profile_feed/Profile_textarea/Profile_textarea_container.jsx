import React from "react";
import {addTextElement, changeTextarea} from "../../../../redux/profilePageReducer";
import ProfileTextarea from "./Profile_textarea";

const ProfileTextareaContainer = (props) => {
    let state = props.store.getState();

    let onButtonClickHandler = () => {
        props.store.dispatch(addTextElement());
    };

    let textareaOnChangeHandler = (text) => {
        props.store.dispatch(changeTextarea(text));
    };

    return (
        <ProfileTextarea onButtonClickHandler={onButtonClickHandler}
                         textareaOnChangeHandler={textareaOnChangeHandler} state={state.profilePage}/>
    );
};

export default ProfileTextareaContainer;
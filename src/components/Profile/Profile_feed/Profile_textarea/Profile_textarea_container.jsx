import React from "react";
import {addTextElement, changeTextarea} from "../../../../redux/profilePageReducer";
import ProfileTextarea from "./Profile_textarea";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newText: state.profilePage.newText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClickHandler: () => {
            dispatch(addTextElement())
        },
        textareaOnChangeHandler: (text) => {
            dispatch(changeTextarea(text))
        }
    };
};

const ProfileTextareaContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileTextarea);

export default ProfileTextareaContainer;
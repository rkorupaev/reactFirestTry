import React from "react";
import {addTextElement} from "../../../../redux/profilePageReducer";
import ProfileTextarea from "./Profile_textarea";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClickHandler: (text) => {
            dispatch(addTextElement(text))
        }
    };
};

const ProfileTextareaContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileTextarea);

export default ProfileTextareaContainer;

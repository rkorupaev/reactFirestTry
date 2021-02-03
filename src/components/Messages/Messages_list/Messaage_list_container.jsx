import React from "react";
import Message_list from "./Messaage_list";
import {connect} from "react-redux";
import {addMessageElement, changeMessageTextarea} from "../../../redux/dialogPageReducer";

const mapStateToProps = (state) => {
    return {
        messagesArray: state.dialogsPage.messagesArray,
        newMessage: state.dialogsPage.newMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageTextareaChange: (text) => {
            dispatch(changeMessageTextarea(text));
        },
        onButtonCLickHandler: () => {
            dispatch(addMessageElement());
        }
    }
}

const Message_list_container = connect(mapStateToProps, mapDispatchToProps)(Message_list);

export default Message_list_container;
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

const Message_list_container = connect(mapStateToProps, {
    onMessageTextareaChange: changeMessageTextarea,
    onButtonCLickHandler: addMessageElement
})(Message_list);

export default Message_list_container;

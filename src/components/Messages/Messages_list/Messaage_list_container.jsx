import React from "react";
import {connect} from "react-redux";
import {addMessageElement} from "../../../redux/dialogPageReducer";
import MessageList from "./Messaage_list";

const mapStateToProps = (state) => {
    return {
        messagesArray: state.dialogsPage.messagesArray,
        newMessage: state.dialogsPage.newMessage
    }
};

const Message_list_container = connect(mapStateToProps, {
    onButtonCLickHandler: addMessageElement
})(MessageList);

export default Message_list_container;

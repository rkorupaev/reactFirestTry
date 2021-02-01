import React from "react";
import {addMessageElement, changeMessageTextarea} from "../../../redux/dialogPageReducer";
import Message_list from "./Messaage_list";

const Message_list_container = (props) => {

    let state = props.store.getState().dialogsPage;

    const onButtonCLickHandler = () => {
        props.store.dispatch(addMessageElement());
    };

    const onMessageTextareaChange = (text) => {
        props.store.dispatch(changeMessageTextarea(text));
    };

    return <Message_list onMessageTextareaChange={onMessageTextareaChange} onButtonCLickHandler={onButtonCLickHandler} state={state}/>;
}

export default Message_list_container;
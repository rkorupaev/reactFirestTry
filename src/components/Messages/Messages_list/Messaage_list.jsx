import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";
import {addMessageElement, changeMessageTextarea} from "../../../redux/state";

const Message_list = (props) => {

    let messageItemArray = props.state.messagesArray.map(message => <Message_item item_text={message.item_text}/>);

    let newMessageElement = React.createRef();

    const onButtonCLickHandler = () => {
        props.dispatch(addMessageElement());
    };

    const onMessageTextareaChange = () => {
        props.dispatch(changeMessageTextarea(newMessageElement.current.value));
    };

    return (
        <div className={styles.messageTextarea_wrapper}>
            <div className={styles.messageTextarea}>
                <textarea ref={newMessageElement} onChange={onMessageTextareaChange}
                          value={props.state.newMessage} placeholder="Пиши здесь"/>
                <button onClick={onButtonCLickHandler}>Send</button>
            </div>
            <ul className={styles.messages_list}>
                {messageItemArray}
            </ul>
        </div>
    );
}

export default Message_list;
import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";

const Message_list = (props) => {

    let messageItemArray = props.messagesArray.map(message => <Message_item item_text={message.item_text}/>);

    return (
        <ul className={styles.messages_list}>
            {messageItemArray}
        </ul>
    );
}

export default Message_list;
import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";

const Message_list = () => {

    let messagesArray = [
        {
            id: 1,
            item_text: "Привет!"
        }, {
            id: 2,
            item_text: "Как дела?"
        }, {
            id: 3,
            item_text: "Уже приехали?!"
        }, {
            id: 4,
            item_text: "Новое сообщение"
        }
    ];

    let messageItemArray = messagesArray.map(message => <Message_item item_text={message.item_text}/>);

    return (
        <ul className={styles.messages_list}>
            {messageItemArray}
        </ul>
    );
}

export default Message_list;
import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";

const Message_list = () => {
    return (
        <ul className={styles.messages_list}>
            <Message_item item_text="Привет!"/>
            <Message_item item_text="Как дела?"/>
            <Message_item item_text="Уже приехали?!"/>
        </ul>
    );
}

export default Message_list;
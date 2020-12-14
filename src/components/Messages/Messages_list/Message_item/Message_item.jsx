import React from "react";
import styles from "./Message_item.module.css";

const Message_item = (props) => {
    return (
        <li className={styles.message_item}>{props.item_text}</li>
    );
}

export default Message_item;
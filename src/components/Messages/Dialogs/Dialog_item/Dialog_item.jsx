import React from "react";
import styles from "./Dialog_item.module.css";

const Dialog_item = (props) => {
    return (
        <li className={styles.dialog_item}><a href="#">{props.item_name}</a></li>
    );
}

export default Dialog_item;
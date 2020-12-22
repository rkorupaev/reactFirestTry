import React from "react";
import styles from "./Dialog_item.module.css";
import {NavLink} from "react-router-dom";

const Dialog_item = (props) => {
    return (
        <li className={styles.dialog_item}><NavLink to={"/messages/"+props.item_id}>{props.item_name}</NavLink></li>
    );
}

export default Dialog_item;
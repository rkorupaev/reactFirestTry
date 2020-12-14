import React from "react";
import styles from "./Dialogs.module.css";
import Dialog_item from "./Dialog_item/Dialog_item";

const Dialogs = () => {
    return (
        <ul className={styles.dialogs_list}>
            <Dialog_item item_name="Dima"/>
            <Dialog_item item_name="Olya"/>
            <Dialog_item item_name="Vasya"/>
            <Dialog_item item_name="John"/>
            <Dialog_item item_name="Kate"/>
        </ul>

    );
}

export default Dialogs;
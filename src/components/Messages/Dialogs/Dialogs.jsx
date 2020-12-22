import React from "react";
import styles from "./Dialogs.module.css";
import Dialog_item from "./Dialog_item/Dialog_item";

const Dialogs = () => {

    let dialogsArray = [
        {
            item_name: "Dima",
            item_id: "1"
        }, {
            item_name: "Olya",
            item_id: "2"
        }, {
            item_name: "Vasya",
            item_id: "3"
        }, {
            item_name: "John",
            item_id: "4"
        }, {
            item_name: "Kate",
            item_id: "5"
        }, {
            item_name: "Igor",
            item_id: "6"
        }
    ];

    let dialogsItemArray = dialogsArray.map(dialog => <Dialog_item item_name={dialog.item_name}
                                                                   item_id={dialog.item_id}/>)

    return (
        <ul className={styles.dialogs_list}>
            {dialogsItemArray}
        </ul>

    );
}

export default Dialogs;
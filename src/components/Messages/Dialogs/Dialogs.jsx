import React from "react";
import styles from "./Dialogs.module.css";
import Dialog_item from "./Dialog_item/Dialog_item";

const Dialogs = (props) => {
    let dialogsItemArray = props.dialogsArray.map(dialog => <Dialog_item item_name={dialog.item_name}
                                                                   item_id={dialog.item_id}/>)

    return (
        <ul className={styles.dialogs_list}>
            {dialogsItemArray}
        </ul>

    );
}

export default Dialogs;
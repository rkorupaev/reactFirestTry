import React from "react";
import styles from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Message_list_container from "./Messages_list/Messaage_list_container";

const Messages = (props) => {

    let state = props.store.getState();

    return (
        <div className={styles.messages_block}>
            <Dialogs store={state.dialogsPage}/>
            <Message_list_container store={props.store}/>
        </div>
    );
}

export default Messages;
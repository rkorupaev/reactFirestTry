import React from "react";
import styles from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Message_list from "./Messages_list/Messaage_list";

const Messages = (props) => {
    return (
        <div className={styles.messages_block}>
            <Dialogs dialogsArray={props.dialogsArray}/>
            <Message_list messagesArray={props.messagesArray}/>
        </div>
    );
}

export default Messages;
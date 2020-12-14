import React from "react";
import styles from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Message_list from "./Messages_list/Messaage_list";

const Messages = () => {
    return (
        <div className={styles.messages_block}>
            <Dialogs/>
            <Message_list/>
        </div>
    );
}

export default Messages;
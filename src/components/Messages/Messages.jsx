import React from "react";
import styles from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Message_list from "./Messages_list/Messaage_list";

const Messages = (props) => {
    return (
        <div className={styles.messages_block}>
            <Dialogs dialogsArray={props.state.dialogsArray}/>
            <Message_list state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Messages;
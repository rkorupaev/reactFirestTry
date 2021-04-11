import React from "react";
import styles from "./Messages.module.css";
import Message_list_container from "./Messages_list/Messaage_list_container";
import Dialogs_container from "./Dialogs/Dialogs_container";
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    // if (!props.isLogged) {
    //     return <Redirect to={`/login`}/>
    // }

    return (
        <div className={styles.messages_block}>
            <Dialogs_container/>
            <Message_list_container/>
        </div>
    );
}

export default Messages;

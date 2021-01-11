import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";

const Message_list = (props) => {

    let messageItemArray = props.messagesArray.map(message => <Message_item item_text={message.item_text}/>);

    let newMessageElement = React.createRef();

    let onButtonCLickHandler = () => {
        alert(newMessageElement.current.value);
        newMessageElement.current.value = "";
    }

    return (
        <div>
            <ul className={styles.messages_list}>
                {messageItemArray}
            </ul>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={onButtonCLickHandler}>Send</button>
        </div>
    );
}

export default Message_list;
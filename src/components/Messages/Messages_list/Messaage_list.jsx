import React from "react";
import styles from "./Message_list.module.css";
import Message_item from "./Message_item/Message_item";
import {Field, Form} from "react-final-form";
import style from "../../Login/Login.module.css";
import {Textarea} from "../../Forms/Forms";
import {setMaxLength} from "../../Assets/Validators/Validators";

const MessageListForm = (props) => {

    const onSubmit = (values) => {
        props.onButtonCLickHandler(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, values, reset}) => (
                <form className={style.loginForm} onSubmit={handleSubmit}>
                    <label>Текст сообщения:</label>
                    <Field name="messageText" component={Textarea} placeholder="Ввведите сообщение"
                           validate={setMaxLength(100)}/>
                    <button className={style.loginForm__button} type={"submit"}>Send message</button>
                </form>
            )}
        />
    );
}

const MessageList = (props) => {

    let messageItemArray = props.messagesArray.map(message => <Message_item key={message.id}
                                                                            item_text={message.item_text}/>);

    return (
        <div className={styles.messageTextarea_wrapper}>
            <MessageListForm onButtonCLickHandler={props.onButtonCLickHandler}/>
            <ul className={styles.messages_list}>
                {messageItemArray}
            </ul>
        </div>
    );
}

export default MessageList;

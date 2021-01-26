import React from "react";
import styles from "./Profile_textarea.module.css";
import {addTextElement, changeTextarea} from "../../../../redux/state";

const Profile_textarea = (props) => {

    let newPostTextArea = React.createRef();

    let onButtonClickHandler = () => {
        props.dispatch(addTextElement());
    };

    let textareaOnChangeHandler = () => {
        props.dispatch(changeTextarea(newPostTextArea.current.value));
    };

    return (
        <div className={styles.profile__textarea}>
            <textarea placeholder="Что нового?" ref={newPostTextArea} onChange={textareaOnChangeHandler}
                      value={props.newText}/>
            <button onClick={onButtonClickHandler}>Send</button>
        </div>
    );
}

export default Profile_textarea;
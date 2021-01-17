import React from "react";
import styles from "./Profile_textarea.module.css";

const Profile_textarea = (props) => {

    let newPostTextArea = React.createRef();

    let onButtonClickHandler = () => {
        props.dispatch({type: 'ADD_TEXT_ELEMENT'});
    };

    let textareaOnChangeHandler = () => {
        props.dispatch({type: 'CHANGE_TEXTAREA', change: newPostTextArea.current.value});
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
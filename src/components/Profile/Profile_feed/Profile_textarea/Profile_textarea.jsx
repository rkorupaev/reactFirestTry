import React from "react";
import styles from "./Profile_textarea.module.css";

const Profile_textarea = (props) => {

    let newPostTextArea = React.createRef();

    let onButtonClickHandler = () => {
        props.addTextElement(newPostTextArea.current.value);
        newPostTextArea.current.value = "";
    }

    return (
        <div className={styles.profile__textarea}>
            <textarea placeholder="Что нового?" ref={newPostTextArea}></textarea>
            <button onClick={onButtonClickHandler}>Send</button>
        </div>
    );
}

export default Profile_textarea;
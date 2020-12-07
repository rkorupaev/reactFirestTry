import React from "react";
import styles from "./Profile_textarea.module.css";

const Profile_textarea = () => {
    return (
        <div className={styles.profile__textarea}>
            <textarea placeholder="Что нового?"></textarea>
            <button type="submit">Send</button>
        </div>
    );
}

export default Profile_textarea;
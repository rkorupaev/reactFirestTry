import React from "react";
import styles from "./Profile_feed.module.css";

const Profile_feed = () => {
    return (
        <div className={styles.profile_feed}>
            <h2>Лента новостей</h2>
            <textarea placeholder="Что нового?"></textarea>
            <button type="submit">Send</button>
        </div>
    );
}

export default Profile_feed;
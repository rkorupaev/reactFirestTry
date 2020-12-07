import React from "react";
import styles from "./Profile_post_item.module.css";

const Profile_post_item = (props) => {
    return (
        <li className={styles.profile_postItem}>{props.post_text}<span className={styles.profile_likecounts}>{props.posts_likes}</span></li>
    );
}

export default Profile_post_item;
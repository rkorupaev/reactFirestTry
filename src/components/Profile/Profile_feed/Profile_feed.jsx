import React from "react";
import styles from "./Profile_feed.module.css";
import ProfileTextareaContainer from "./Profile_textarea/Profile_textarea_container";
import Profile_posts_container from "./Profile_posts/Profile_posts_container";

const Profile_feed = (props) => {
    return (
        <div className={styles.profile_feed}>
            <h2>Лента новостей</h2>
            <ProfileTextareaContainer/>
            <Profile_posts_container/>
        </div>
    );
}

export default Profile_feed;
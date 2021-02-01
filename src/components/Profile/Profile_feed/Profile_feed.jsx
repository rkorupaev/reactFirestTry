import React from "react";
import styles from "./Profile_feed.module.css";
import Profile_posts from "./Profile_posts/Profile_posts";
import ProfileTextareaContainer from "./Profile_textarea/Profile_textarea_container";

const Profile_feed = (props) => {
    let state = props.store.getState();
    return (
        <div className={styles.profile_feed}>
            <h2>Лента новостей</h2>
            <ProfileTextareaContainer store={props.store}/>
            <Profile_posts state={state}/>
        </div>
    );
}

export default Profile_feed;
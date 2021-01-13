import React from "react";
import styles from "./Profile_feed.module.css";
import Profile_textarea from "./Profile_textarea/Profile_textarea";
import Profile_posts from "./Profile_posts/Profile_posts";

const Profile_feed = (props) => {
    return (
        <div className={styles.profile_feed}>
            <h2>Лента новостей</h2>
            <Profile_textarea addTextElement={props.addTextElement} changeTextarea={props.changeTextarea} newText={props.state.profilePage.newText}/>
            <Profile_posts postsArray={props.state.profilePage.postsArray}/>
        </div>
    );
}

export default Profile_feed;
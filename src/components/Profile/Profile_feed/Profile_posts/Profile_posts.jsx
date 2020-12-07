import React from "react";
import styles from "./Profile_posts.module.css";
import Profile_post_item from "./Profile_postitem/Profile_post_item";

const Profile_posts = () => {
    return (
        <div className={styles.profile__posts}>
            <ul>
                <Profile_post_item post_text="Not rly, just kidding)" posts_likes="15"/>
                <Profile_post_item post_text="I am so cool!" posts_likes="25"/>
                <Profile_post_item post_text="First post! Hello world!" posts_likes="135"/>
            </ul>
        </div>
    );
}

export default Profile_posts;
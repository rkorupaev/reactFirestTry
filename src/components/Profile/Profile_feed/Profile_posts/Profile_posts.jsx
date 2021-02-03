import React from "react";
import styles from "./Profile_posts.module.css";
import Profile_post_item from "./Profile_postitem/Profile_post_item";

const Profile_posts = (props) => {

    let postsItemArray = props.postsArray.map(post => <Profile_post_item post_text={post.post_text} posts_likes={post.posts_likes}/> );

    return (
        <div className={styles.profile__posts}>
            <ul>
                {postsItemArray}
            </ul>
        </div>
    );
}

export default Profile_posts;
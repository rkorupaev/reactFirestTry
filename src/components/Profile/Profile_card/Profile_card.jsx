import React from "react";
import styles from "./Profile_card.module.css";
import Profile_avatar from "./Profile_avatar/Profile_avatar";
import Profile_bio from "./Profile_bio/Profile_bio";

const Profile_card = () => {
    return (
        <div className={styles.profile_card}>
            <Profile_avatar/>
            <Profile_bio/>
        </div>
    );
}

export default Profile_card;
import React from "react";
import styles from "./Profile.module.css";
import Profile_card from "./Profile_card/Profile_card";
import Profile_feed from "./Profile_feed/Profile_feed";

const Profile = () => {
    return (
        <section className={styles.profile}>
            <Profile_card/>
            <Profile_feed/>
        </section>
    );
}

export default Profile;
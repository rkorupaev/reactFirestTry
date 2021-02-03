import React from "react";
import styles from "./Profile.module.css";
import Profile_card from "../Profile/Profile_card/Profile_card";
import Profile_feed from "../Profile/Profile_feed/Profile_feed";

const Profile = (props) => {
    return (
            <div className={styles.profile}>
                <Profile_card/>
                <Profile_feed/>
            </div>
    );
}

export default Profile;
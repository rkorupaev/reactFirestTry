import React from "react";
import styles from "./Profile_avatar.module.css";

const Profile_avatar = () => {
    return (
            <div className={styles.profile_avatar}>
                <img src="https://loremflickr.com/320/240"/>
            </div>
    );
}

export default Profile_avatar;
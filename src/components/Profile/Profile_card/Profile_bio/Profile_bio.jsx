import React from "react";
import styles from "./Profile_bio.module.css";

const Profile_bio = (props) => {
    return (
        <div className={styles.profile_bio}>
            <h2>{props.bio.fullName}</h2>
            <p>{props.bio.aboutMe}</p>
        </div>
    );
}

export default Profile_bio;

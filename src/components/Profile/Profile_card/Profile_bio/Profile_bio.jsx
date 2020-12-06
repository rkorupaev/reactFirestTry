import React from "react";
import styles from "./Profile_bio.module.css";

const Profile_bio = () => {
    return (
        <div className={styles.profile_bio}>
            <h2>Roman Korupaev</h2>
            <p>Текст о себе</p>
        </div>
    );
}

export default Profile_bio;
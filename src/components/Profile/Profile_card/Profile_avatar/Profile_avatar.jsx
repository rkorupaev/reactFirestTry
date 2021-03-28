import React from "react";
import styles from "./Profile_avatar.module.css";

const Profile_avatar = (props) => {
    return (
            <div className={styles.profile_avatar}>
                <img src={props.avatar.large}/>
            </div>
    );
}

export default Profile_avatar;

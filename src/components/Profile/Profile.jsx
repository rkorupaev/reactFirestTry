import React from "react";
import styles from "./Profile.module.css";
import Profile_card from "../Profile/Profile_card/Profile_card";
import Profile_feed from "../Profile/Profile_feed/Profile_feed";
import preloaderHorizontal from "../../img/preloader.gif";

const Profile = (props) => {
    if (!props.userProfile) {
        return (
            <img src={preloaderHorizontal}/>
        );
    }

    return (
        <div className={styles.profile}>
            <Profile_card userProfile={props.userProfile}/>
            <Profile_feed/>
        </div>
    );
}

export default Profile;

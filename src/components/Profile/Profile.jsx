import React from "react";
import styles from "./Profile.module.css";

const Profile = ()=> {
    return (
        <section className={styles.profile}>
            <div>
                <h2>Roman Korupaev</h2>
                <img src="https://loremflickr.com/320/240" />
            </div>
        </section>
    );
}

export default Profile;
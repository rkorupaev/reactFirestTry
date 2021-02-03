import React from "react";
import styles from "./Sidebar.module.css";
import Sidebar_list from "./Sidebar_list/Sidebar_list";
import FriendsList_container from "./FriendsList/FriendsList_container";

const Sidebar = (props) => {
    return (
        <section className={styles.sidebar}>
            <Sidebar_list/>
            <FriendsList_container/>
        </section>
    );
}

export default Sidebar;
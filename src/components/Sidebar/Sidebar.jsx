import React from "react";
import styles from "./Sidebar.module.css";
import Sidebar_list from "./Sidebar_list/Sidebar_list";
import FriendsList from "./FriendsList/FriendsList";

const Sidebar = () => {
    return (
        <section className={styles.sidebar}>
            <Sidebar_list/>
            <FriendsList />
        </section>
    );
}

export default Sidebar;
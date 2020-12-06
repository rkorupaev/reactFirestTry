import React from "react";
import styles from "./Sidebar_item.module.css";

const Sidebar_item = () => {
    return (
        <li className={styles.list__item}><a href="#">Profile</a></li>
    );
}

export default Sidebar_item;
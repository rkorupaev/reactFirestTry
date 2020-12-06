import React from "react";
import styles from "./Sidebar_list.module.css";
import Sidebar_item from "./Sidebar_item/Sidebar_item";

const Sidebar_list = () => {
    return (
            <ul className={styles.sidebar__list}>
                <Sidebar_item/>
                <Sidebar_item/>
                <Sidebar_item/>
                <Sidebar_item/>
                <Sidebar_item/>
            </ul>
    );
}

export default Sidebar_list;
import React from "react";
import styles from "./Sidebar_list.module.css";
import Sidebar_item from "./Sidebar_item/Sidebar_item";

const Sidebar_list = () => {
    return (
            <ul className={styles.sidebar__list}>
                <Sidebar_item item__text='Profile'/>
                <Sidebar_item item__text='About me'/>
                <Sidebar_item item__text='Music'/>
                <Sidebar_item item__text='Video'/>
                <Sidebar_item item__text='Settings'/>
            </ul>
    );
}

export default Sidebar_list;
import React from "react";
import styles from "./Sidebar_list.module.css";
import Sidebar_item from "./Sidebar_item/Sidebar_item";

const Sidebar_list = () => {
    return (
            <ul className={styles.sidebar__list}>
                <Sidebar_item item__text='Profile' item__link="/profile"/>
                <Sidebar_item item__text='Messages' item__link="/messages"/>
                <Sidebar_item item__text='Friends' item__link="/friends"/>
                <Sidebar_item item__text='Music' item__link="/music"/>
                <Sidebar_item item__text='Video' item__link="/video"/>
                <Sidebar_item item__text='Settings' item__link="/settings"/>
            </ul>
    );
}

export default Sidebar_list;

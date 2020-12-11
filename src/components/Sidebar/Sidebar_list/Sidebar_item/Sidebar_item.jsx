import React from "react";
import styles from "./Sidebar_item.module.css";

const Sidebar_item = (props) => {
    return (
        <li className={styles.list__item}><a href={props.item__link}>{props.item__text}</a></li>
    );
}

export default Sidebar_item;
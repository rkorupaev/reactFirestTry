import React from "react";
import styles from "./Sidebar_item.module.css";
import {NavLink} from "react-router-dom";

const Sidebar_item = (props) => {
    return (
        <li className={styles.list__item}><NavLink to={props.item__link} activeClassName={styles.active}>{props.item__text}</NavLink></li>
    );
}

export default Sidebar_item;
import React from "react";
import styles from "./Header_logo.module.css";

const Header_logo = () => {
    return (
            <a className={styles.header__logo} href="#">
                <img src="https://loremflickr.com/320/240" width="240" height="180"/>
            </a>
    );
}

export default Header_logo;
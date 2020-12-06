import React from "react";
import styles from "./Header.module.css";
import generalStyles from "../General.module.css";

const Header = () => {
    return (
        <header className={`${styles.header} ${generalStyles.container}`}>
            <a className={styles.header__logo} href="#">
                <img src="https://loremflickr.com/320/240" width="240" height="180"/>
            </a>
        </header>
    );
}

export default Header;
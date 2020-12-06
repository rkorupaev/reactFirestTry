import React from "react";
import styles from "./Header.module.css";
import generalStyles from "../General.module.css";
import Header_logo from "./Logo/Header_logo";

const Header = () => {
    return (
        <header className={`${styles.header} ${generalStyles.container}`}>
            <Header_logo/>
        </header>
    );
}

export default Header;
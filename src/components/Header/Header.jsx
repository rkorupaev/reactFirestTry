import React from "react";
import styles from "./Header.module.css";
import generalStyles from "../General.module.css";
import Header_logo from "./Logo/Header_logo";
import LoginBlockContainer from "./Login_BLock/LoginBlockContainer";

const Header = () => {
    return (
        <header className={`${styles.header} ${generalStyles.container}`}>
            <Header_logo/>
            <LoginBlockContainer />
        </header>
    );
}

export default Header;

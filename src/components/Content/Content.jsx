import React from "react";
import styles from "./Content.module.css";
import {Route} from "react-router-dom";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import Video from "../Video/Mucis";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";

const Content = () => {
    return (
        <section className={styles.content}>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/music" component={Music}/>
            <Route path="/video" component={Video}/>
            <Route path="/settings" component={Settings}/>
        </section>
    );
}

export default Content;
import React from "react";
import styles from "./Content.module.css";
import {Redirect, Route} from "react-router-dom";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import Video from "../Video/Video";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import FriendsListContainer from "../Friends/Friends_container";

const Content = (props) => {

    return (
        <section className={styles.content}>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/messages" render={() => <Messages/>}/>
            <Route path="/friends" render={() =>
                <FriendsListContainer/>
            }/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/video" render={() =>
                <Video/>
            }/>
            <Route path="/settings" render={() =>
                <Settings/>
            }/>
            <Redirect from='/' to='/profile'/>
        </section>
    );
}

export default Content;

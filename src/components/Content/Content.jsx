import React from "react";
import styles from "./Content.module.css";
import {Route} from "react-router-dom";
import Messages from "../Messages/Messages";
import Music from "../Music/Music";
import Video from "../Video/Mucis";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";

const Content = (props) => {
    return (
        <section className={styles.content}>
            <Route path="/profile" render={() => <Profile state={props.state} dispatch={props.dispatch}/>}/>
            <Route path="/messages" render={() => <Messages state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/video" render={() =>
                <Video/>
            }/>
            <Route path="/settings" render={() =>
                <Settings/>
            }/>
        </section>
    );
}

export default Content;
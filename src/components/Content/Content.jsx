import React from "react";
import styles from "./Content.module.css";
import {Redirect, Route} from "react-router-dom";
import Music from "../Music/Music";
import Video from "../Video/Video";
import Settings from "../Settings/Settings";
import FriendsListContainer from "../Friends/Friends_container";
import Login from "../Login/Login";
import ProfileContainerWithRouter from "../Profile/ProfileContainer";
import {MessagesContainer} from "../Messages/Messages_Container";
import MyProfileContainer from "../Profile/MyProfile/MyProfileContainer";

const Content = () => {
    return (
        <section className={styles.content}>
            <Route path="/profile/:userId" render={() => <ProfileContainerWithRouter />}/>
            <Route exact path="/profile" render={ () => <MyProfileContainer />} />
            <Redirect from='/' to="/profile"/>
            <Route path="/messages" render={() => <MessagesContainer/>}/>
            <Route path="/friends" render={() => <FriendsListContainer/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/video" render={() => <Video/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
            <Route path="/login" render={() => <Login/>}/>
        </section>
    );
}

export default Content;

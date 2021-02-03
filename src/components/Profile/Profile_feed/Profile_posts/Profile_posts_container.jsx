import React from "react";
import {connect} from "react-redux";
import Profile_posts from "./Profile_posts";

const mapStateToProps = (state)=> {
    return {
        postsArray: state.profilePage.postsArray
    }
}

const Profile_posts_container = connect(mapStateToProps)(Profile_posts);

export default Profile_posts_container;
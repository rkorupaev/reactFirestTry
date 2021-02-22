import React from "react";
import style from "./Friends.module.css";
import {connect} from "react-redux";
import FriendsList from "./Friends";

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage
    }
}

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

export default FriendsListContainer;

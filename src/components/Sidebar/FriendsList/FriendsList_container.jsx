import React from 'react';
import {connect} from "react-redux";
import FriendsList from "./FriendsList";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const FriendsList_container = connect(mapStateToProps)(FriendsList);

export default FriendsList_container;
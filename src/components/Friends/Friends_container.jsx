import React from "react";
import {connect} from "react-redux";
import FriendsList from "./Friends";
import {changeStatusAC, setFriendsAC} from "../../redux/friendsPageReducer";

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage.friendsArray
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (friendsArray) => {
            dispatch(setFriendsAC(friendsArray));
        },
        onFollowButtonCLick: (friendID) => {
            dispatch(changeStatusAC(friendID));
        }
    }
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;

import React from "react";
import {connect} from "react-redux";
import FriendsList from "./Friends";
import {changeStatusAC, setCurrentPageAC, setFriendsAC} from "../../redux/friendsPageReducer";

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage.friendsArray,
        totalCount: state.friendsPage.totalCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (friendsArray) => {
            dispatch(setFriendsAC(friendsArray));
        },
        onFollowButtonCLick: (friendID) => {
            dispatch(changeStatusAC(friendID));
        },
        onPageButtonClick: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList);

export default FriendsListContainer;

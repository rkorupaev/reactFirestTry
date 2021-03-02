import React from "react";
import {connect} from "react-redux";
import FriendsList from "./Friends";
import {changeStatusAC, setCurrentPageAC, setFriendsAC, setTotalPagesAC} from "../../redux/friendsPageReducer";
import * as axios from "axios";


class FriendsListApi extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setTotalPages(response.data.totalCount)
        });
    };

    onPageButtonClickHandler = (pageNumber) => {
        this.props.onPageButtonClick(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setFriends(response.data.items)
        });
    };

    render() {
        return <FriendsList totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                            onPageButtonClickHandler={this.onPageButtonClickHandler}
                            currentPage={this.props.currentPage}
                            friendsArray={this.props.friendsArray}
                            onFollowButtonCLick={this.props.onFollowButtonCLick}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage.friendsArray,
        totalUsersCount: state.friendsPage.totalUsersCount,
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
        },
        setTotalPages: (totalUsers) => {
            dispatch(setTotalPagesAC(totalUsers));
        }
    }
};

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsListApi);

export default FriendsListContainer;

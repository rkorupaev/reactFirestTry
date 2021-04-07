import React from "react";
import {connect} from "react-redux";
import FriendsList from "./Friends";
import {
    changeFollowingStatus,
    changeStatus, getUsers, nextPage, prevPage,
    setCurrentPage, setFollowStatus,
} from "../../redux/friendsPageReducer";


class FriendsListApi extends React.Component {
    componentDidMount() {
        // this.props.changeFetchStatus(true);
        // usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
        //     this.props.setFriends(data.items)
        //     this.props.setTotalPages(data.totalCount)
        //     this.props.changeFetchStatus(false);
        // })
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    };

    onPageButtonClickHandler = (pageNumber) => {
        if (pageNumber !== this.props.currentPage) {
            this.props.onPageButtonClick(pageNumber);
            this.props.getUsers(this.props.pageSize, pageNumber);
            // this.props.changeFetchStatus(true);
            // usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            //     this.props.setFriends(data.items)
            //     this.props.changeFetchStatus(false);
            // });
        }
    };

    onNextPageCLickHandler = (pageNumber) => {
        this.props.onNextPageCLick(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
        // this.props.changeFetchStatus(true);
        // usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
        //     this.props.setFriends(data.items)
        //     this.props.changeFetchStatus(false);
        // });
    };

    onPrevPageCLickHandler = (pageNumber) => {
        if (pageNumber >= 1) {
            this.props.onPrevPageCLick(pageNumber);
            // this.props.changeFetchStatus(true);
            // usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            //     this.props.setFriends(data.items)
            //     this.props.changeFetchStatus(false);
            // });
            this.props.getUsers(this.props.pageSize, pageNumber);
        }
    };

    render() {
        return <FriendsList totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                            onPageButtonClickHandler={this.onPageButtonClickHandler}
                            currentPage={this.props.currentPage}
                            friendsArray={this.props.friendsArray}
                            onFollowButtonCLick={this.props.onFollowButtonCLick}
                            isFetching={this.props.isFetching}
                            onNextPageCLickHandler={this.onNextPageCLickHandler}
                            onPrevPageCLickHandler={this.onPrevPageCLickHandler}
                            changeFollowingStatus={this.props.changeFollowingStatus}
                            isFollowing={this.props.isFollowing}
                            setFollowStatus={this.props.setFollowStatus}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage.friendsArray,
        totalUsersCount: state.friendsPage.totalUsersCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        isFollowing: state.friendsPage.isFollowing
    }
};

const FriendsListContainer = connect(mapStateToProps, {
    onFollowButtonCLick: changeStatus,
    onPageButtonClick: setCurrentPage,
    onNextPageCLick: nextPage,
    onPrevPageCLick: prevPage,
    changeFollowingStatus: changeFollowingStatus,
    getUsers,
    setFollowStatus
})(FriendsListApi);

export default FriendsListContainer;

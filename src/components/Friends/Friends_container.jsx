import React from "react";
import {connect} from "react-redux";
import FriendsList from "./Friends";
import {
    changeFetchingStatus,
    changeStatus, nextPage, prevPage,
    setCurrentPage,
    setFriends,
    setTotalPages
} from "../../redux/friendsPageReducer";
import * as axios from "axios";


class FriendsListApi extends React.Component {
    componentDidMount() {
        this.props.changeFetchStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.setTotalPages(response.data.totalCount)
            this.props.changeFetchStatus(false);
        });
    };

    onPageButtonClickHandler = (pageNumber) => {
        if (pageNumber !== this.props.currentPage) {
            this.props.onPageButtonClick(pageNumber);
            this.props.changeFetchStatus(true);

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
                this.props.setFriends(response.data.items)
                this.props.changeFetchStatus(false);
            });
        }
    };

    onNextPageCLickHandler = (pageNumber) => {
        this.props.onNextPageCLick(pageNumber);
        this.props.changeFetchStatus(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setFriends(response.data.items)
            this.props.changeFetchStatus(false);
        });
    };

    onPrevPageCLickHandler = (pageNumber) => {
        if (pageNumber >= 1) {
            this.props.onPrevPageCLick(pageNumber);
            this.props.changeFetchStatus(true);

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
                this.props.setFriends(response.data.items)
                this.props.changeFetchStatus(false);
            });
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
                            onPrevPageCLickHandler={this.onPrevPageCLickHandler}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        friendsArray: state.friendsPage.friendsArray,
        totalUsersCount: state.friendsPage.totalUsersCount,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
};

const FriendsListContainer = connect(mapStateToProps, {
    setFriends,
    onFollowButtonCLick: changeStatus,
    onPageButtonClick: setCurrentPage,
    setTotalPages,
    changeFetchStatus: changeFetchingStatus,
    onNextPageCLick: nextPage,
    onPrevPageCLick: prevPage
})(FriendsListApi);

export default FriendsListContainer;

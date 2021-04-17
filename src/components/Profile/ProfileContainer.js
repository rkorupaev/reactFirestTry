import React from "react";
import styles from "./Profile.module.css";
import {getActiveUserProfile, getUserStatus} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getActiveUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        debugger
        return (
            <div className={styles.profile}>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        userStatus: state.profilePage.statusText
    }
}

export default compose(withRouter, connect(mapStateToProps, {getActiveUserProfile, getUserStatus}))(ProfileContainer);

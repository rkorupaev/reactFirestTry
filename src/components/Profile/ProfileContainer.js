import React from "react";
import styles from "./Profile.module.css";
import * as axios from "axios";
import {setActiveUserProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../axiosAPI/axiosAPI";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        usersAPI.getProfile(userId).then(data => {
            this.props.setActiveUserProfile(data)
        });
    }

    render() {
        return (
            <div className={styles.profile}>
                <Profile {...this.props} userProfile={this.props.userProfile} />
            </div>
        )
    }
    ;
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setActiveUserProfile})(ProfileContainerWithRouter);

import React from "react";
import styles from "./Profile.module.css";
import * as axios from "axios";
import {setActiveUserProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setActiveUserProfile(response.data)
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

import React from "react";
import styles from "./Profile.module.css";
import {getActiveUserProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getActiveUserProfile(userId);
    }


    render() {
        if (!this.props.isLogged) {
            return <Redirect to={`/login`} />
        }

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
        userProfile: state.profilePage.userProfile,
    }
}

// let authRedirectContainer = withAuthRedirect(ProfileContainer);

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getActiveUserProfile})(ProfileContainerWithRouter);

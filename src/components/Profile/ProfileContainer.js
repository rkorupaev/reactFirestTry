import React from "react";
import styles from "./Profile.module.css";
import * as axios from "axios";
import {setActiveUserProfile} from "../../redux/profilePageReducer";
import {connect} from "react-redux";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/30`).then(response => {
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

export default connect(mapStateToProps, {setActiveUserProfile})(ProfileContainer);

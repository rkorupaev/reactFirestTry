import React, {useEffect, useState} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserStatus, updateUserStatus} from "../../../redux/profilePageReducer";

const MyProfileContainer = (props) => {
    const [status, setStatus] = useState(props.statusText);

    useEffect(() => {
        props.getUserStatus(props.userId);
    });

    return (
        <MyProfile statusText={status}/>
    );
};

let mapStateToProps = (state) => {
    return {
        statusText: state.profilePage.statusText,
        userId: state.auth.id
    }
};

export default connect(mapStateToProps, {getUserStatus, updateUserStatus})(MyProfileContainer);

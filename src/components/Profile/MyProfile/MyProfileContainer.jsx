import React, {useEffect, useState} from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getUserStatus, updateUserStatus} from "../../../redux/profilePageReducer";

const MyProfileContainer = (props) => {
    const [status, setStatus] = useState(props.statusText);

    useEffect(() => {
        props.getUserStatus(props.userId);
    }, props.userId);

    useEffect(() => {
        setStatus(props.statusText);
    });


    return (
        <MyProfile statusText={props.statusText} updateUserStatus={props.updateUserStatus} userId={props.userId}/>
    );
};

let mapStateToProps = (state) => {
    return {
        statusText: state.profilePage.statusText,
        userId: state.auth.id
    }
};

export default connect(mapStateToProps, {getUserStatus, updateUserStatus})(MyProfileContainer);

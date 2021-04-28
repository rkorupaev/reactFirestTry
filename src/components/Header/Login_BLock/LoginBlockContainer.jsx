import React from "react";
import LoginBlock from "./LoginBlock";
import {connect} from "react-redux";
import {getLoggedUserData, logOut} from "../../../redux/authReducer";

class LoginBlockContainer extends React.Component {
    componentDidMount() {
        this.props.getLoggedUserData();
    }

    render() {
        return <LoginBlock {...this.props} />
    }
};

let mapStateToProps = (state) => {
    return {
        loggedUserName: state.auth.login,
        isLogged: state.auth.isLogged,
        loggedUserEmail: state.auth.email
    }
};

export default connect(mapStateToProps, {getLoggedUserData, logOut})(LoginBlockContainer);

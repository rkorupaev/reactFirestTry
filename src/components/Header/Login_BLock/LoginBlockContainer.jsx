import React from "react";
import LoginBlock from "./LoginBlock";
import {connect} from "react-redux";
import {logOut} from "../../../redux/authReducer";

class LoginBlockContainer extends React.Component {
    render() {
        return <LoginBlock {...this.props} />
    }
};

let mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        loggedUserName: state.auth.login,
        loggedUserEmail: state.auth.email
    }
};

export default connect(mapStateToProps, {logOut})(LoginBlockContainer);

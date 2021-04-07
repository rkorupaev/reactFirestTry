import React from "react";
import LoginBlock from "./LoginBlock";
import {connect} from "react-redux";
import {setLoggedUserData} from "../../../redux/authReducer";
import axios from "axios";
import {authApi} from "../../../axiosAPI/axiosAPI";

class LoginBlockContainer extends React.Component {
    componentDidMount() {
        authApi.getLoggedUser().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setLoggedUserData(id, email, login);
            }
        });
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

export default connect(mapStateToProps, {setLoggedUserData})(LoginBlockContainer);

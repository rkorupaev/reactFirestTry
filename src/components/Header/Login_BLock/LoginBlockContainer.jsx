import React from "react";
import LoginBlock from "./LoginBlock";
import {connect} from "react-redux";
import authReducer, {setLoggedUserData} from "../../../redux/authReducer";
import axios from "axios";

class LoginBlockContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
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

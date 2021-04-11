import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}


export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isLogged) {
            return <Redirect to={"/login"} />;
        }

        return <Component {...props} />;
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
};

import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispath) => {
    return {}
}

let authRedirectContainer = withAuthRedirect(Messages);

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectContainer);

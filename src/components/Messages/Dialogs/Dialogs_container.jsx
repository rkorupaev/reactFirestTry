import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogsArray: state.dialogsPage.dialogsArray
    }
}

const Dialogs_container = connect(mapStateToProps)(Dialogs);

export default Dialogs_container;

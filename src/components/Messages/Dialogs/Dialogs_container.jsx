import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

// const Dialogs = (props) => {
//     let dialogsItemArray = props.store.dialogsArray.map(dialog => <Dialog_item item_name={dialog.item_name}
//                                                                    item_id={dialog.item_id}/>)
//
//     return (
//         <ul className={styles.dialogs_list}>
//             {dialogsItemArray}
//         </ul>
//
//     );
// }

const mapStateToProps = (state) => {
    return {
        dialogsArray: state.dialogsPage.dialogsArray
    }
}

const Dialogs_container = connect(mapStateToProps)(Dialogs);

export default Dialogs_container;
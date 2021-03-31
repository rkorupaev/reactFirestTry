import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import friendPageReducer from "./friendsPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    friendsPage: friendPageReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

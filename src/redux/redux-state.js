import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";
import friendPageReducer from "./friendsPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    friendsPage: friendPageReducer,
    auth: authReducer,
    initApp: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

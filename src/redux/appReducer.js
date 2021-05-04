import {authApi} from "../axiosAPI/axiosAPI";
import {getLoggedUserData} from "./authReducer";

const SET_INIT_STATUS = 'SET_INIT_STATUS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT_STATUS: {
            return {
                ...state, initialized: true
            };
        }
        default:
            return state;
    }
};

export const setInitApp = () => {
    return ({type: SET_INIT_STATUS});
};

export const initApp = () => (dispatch) => {
    const promise = dispatch(getLoggedUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitApp());
    });
};

export default appReducer;

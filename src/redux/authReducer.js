import {authApi} from "../axiosAPI/axiosAPI";

const SET_LOGGED_USER_DATA = 'SET_LOGGED_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_USER_DATA: {
            return {
                ...state, ...action.data
            };
        }
        default:
            return state;
    }
};

export const setLoggedUserData = (id, email, login, isLogged) => {
    return ({type: SET_LOGGED_USER_DATA, data: {id, email, login, isLogged}});
}

export const getLoggedUserData = () => (dispatch) => {
    return authApi.getLoggedUser().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setLoggedUserData(id, email, login, true));
        }
    });
}

export const logIn = (email, password, rememberMe) => (dispatch) => {
    authApi.logIn(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getLoggedUserData());
        }
    });
}

export const logOut = () => (dispatch) => {
    authApi.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setLoggedUserData(null, null, null, false));
        }
    });
}

export default authReducer;

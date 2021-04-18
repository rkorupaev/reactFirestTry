import {authApi} from "../axiosAPI/axiosAPI";

const SET_LOGGED_USER_DATA = 'SET_LOGGED_USER_DATA';

let initialState = {
    id: 16224,
    email: null,
    login: null,
    isLogged: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_USER_DATA: {
            return {
                ...state, ...action.data, isLogged: true
            };
        }
        default:
            return state;
    }
};

export const setLoggedUserData = (id, email, login) => {
    return ({type: SET_LOGGED_USER_DATA, data: {id, email, login}});
}

export const getLoggedUserData = () => (dispatch) => {
        authApi.getLoggedUser().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setLoggedUserData(id, email, login));
            }
        });
}

export default authReducer;

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

export default authReducer;

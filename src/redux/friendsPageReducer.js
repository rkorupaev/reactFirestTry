const SET_FRIENDS = 'SET_FRIENDS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    friendsArray: [],
    pageSize: 5,
    totalCount: 21,
    currentPage: 1
};

const friendPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                ...state, friendsArray: [...action.friendsArray]
            };
        }
        case CHANGE_STATUS: {
            return {
                ...state, friendsArray: state.friendsArray.map(user => {
                    if (user.id === action.id) {
                        user.followed === false ? user.followed = true : user.followed = false;
                    }
                    return user;
                })
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            };
        }
        default:
            return state;
    }
};

export const setFriendsAC = (friendsArray) => {
    return ({type: SET_FRIENDS, friendsArray});
}

export const changeStatusAC = (id) => {
    return ({type: CHANGE_STATUS, id});
}

export const setCurrentPageAC = (currentPage) => {
    return ({type: SET_CURRENT_PAGE, currentPage});
}

export default friendPageReducer;

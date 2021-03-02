const SET_FRIENDS = 'SET_FRIENDS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const CHANGE_FETCH_STATUS = 'CHANGE_FETCH_STATUS';

let initialState = {
    friendsArray: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_TOTAL_PAGES: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            };
        }
        case CHANGE_FETCH_STATUS: {
            return {
                ...state, isFetching: action.isFetching
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

export const setTotalPagesAC = (totalUsersCount) => {
    return ({type: SET_TOTAL_PAGES, totalUsersCount});
}

export const changeFetchingStatusAC = (isFetching) => {
    return ({type: CHANGE_FETCH_STATUS, isFetching});
}

export default friendPageReducer;

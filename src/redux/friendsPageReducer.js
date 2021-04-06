const SET_FRIENDS = 'SET_FRIENDS';
const CHANGE_STATUS = 'CHANGE_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const CHANGE_FETCH_STATUS = 'CHANGE_FETCH_STATUS';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREV_PAGE';
const CHANGE_FOLLOWING_STATUS = 'CHANGE_FOLLOWING_STATUS';

let initialState = {
    friendsArray: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
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
        case NEXT_PAGE: {
            return {
                ...state, currentPage: action.currentPage + 1
            };
        }
        case PREV_PAGE: {
            return {
                ...state, currentPage: action.currentPage - 1
            };
        }
        case CHANGE_FOLLOWING_STATUS: {
            console.log(state.isFollowing);
            return {
                ...state,
                isFollowing: action.isFollowing ? [...state.isFollowing, action.userId] : state.isFollowing.filter(user => user != action.userId)
            };
        }
        default:
            return state;
    }
};

export const setFriends = (friendsArray) => {
    return ({type: SET_FRIENDS, friendsArray});
}

export const changeStatus = (id) => {
    return ({type: CHANGE_STATUS, id});
}

export const setCurrentPage = (currentPage) => {
    return ({type: SET_CURRENT_PAGE, currentPage});
}

export const setTotalPages = (totalUsersCount) => {
    return ({type: SET_TOTAL_PAGES, totalUsersCount});
}

export const changeFetchingStatus = (isFetching) => {
    return ({type: CHANGE_FETCH_STATUS, isFetching});
}

export const nextPage = (currentPage) => {
    return ({type: NEXT_PAGE, currentPage});
}

export const prevPage = (currentPage) => {
    return ({type: PREV_PAGE, currentPage});
}

export const changeFollowingStatus = (isFollowing, userId) => {
    return ({type: CHANGE_FOLLOWING_STATUS, isFollowing, userId});
}

export default friendPageReducer;

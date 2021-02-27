const SET_FRIENDS = 'SET_FRIENDS';
const CHANGE_STATUS = 'CHANGE_STATUS';

let initialState = {
    friendsArray: [
        ]
};

const friendPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                ...state, friendsArray: [...state.friendsArray, ...action.friendsArray]
            };
        }
        case CHANGE_STATUS: {
            return {
                ...state, friendsArray: state.friendsArray.map(user => {
                    if (user.id === action.id) {
                        user.isFollowed === false ? user.isFollowed = true : user.isFollowed = false;
                    }
                    return user;
                })
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

export default friendPageReducer;

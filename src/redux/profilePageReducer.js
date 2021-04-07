import {usersAPI} from "../axiosAPI/axiosAPI";

const ADD_TEXT_ELEMENT = 'ADD_TEXT_ELEMENT';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';
const SET_ACTIVE_USER_PROFILE = 'SET_ACTIVE_USER_PROFILE';

let initialState = {
    postsArray: [
        {
            id: 3,
            post_text: "Not rly, just kidding)",
            posts_likes: "15"
        },
        {
            id: 2,
            post_text: "I am so cool!",
            posts_likes: "25"
        },
        {
            id: 1,
            post_text: "First post! Hello world!",
            posts_likes: "135"
        }
    ],
    newText: "",
    userProfile: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT_ELEMENT: {
            let newElement = {
                id: state.postsArray.length + 1,
                post_text: state.newText,
                posts_likes: 0
            };
            return {
                ...state,
                postsArray: [newElement, ...state.postsArray],
                newText: ''
            };
        }
        case CHANGE_TEXTAREA: {
            return {
                ...state,
                newText: action.change
            };
        }
        case SET_ACTIVE_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            };
        }
        default:
            return state;
    }
};

export const addTextElement = () => {
    return ({type: ADD_TEXT_ELEMENT});
}

export const changeTextarea = (text) => {
    return ({type: CHANGE_TEXTAREA, change: text});
}

export const setActiveUserProfile = (userProfile) => {
    return ({type: SET_ACTIVE_USER_PROFILE, userProfile: userProfile});
}

export const getActiveUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setActiveUserProfile(data));
    });
}

export default profilePageReducer;

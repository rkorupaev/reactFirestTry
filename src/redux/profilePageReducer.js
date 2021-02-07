const ADD_TEXT_ELEMENT = 'ADD_TEXT_ELEMENT';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';

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
    newText: ""
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT_ELEMENT: {
            let stateCopy = {...state};
            let newElement = {
                id: state.postsArray.length + 1,
                post_text: state.newText,
                posts_likes: 0
            };
            stateCopy.postsArray = [...state.postsArray];
            stateCopy.postsArray.unshift(newElement);
            stateCopy.newText = '';
            return stateCopy;
        }
        case CHANGE_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.newText = action.change;
            return stateCopy;
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

export default profilePageReducer;
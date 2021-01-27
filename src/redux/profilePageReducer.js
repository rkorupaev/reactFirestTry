const ADD_TEXT_ELEMENT = 'ADD_TEXT_ELEMENT';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_TEXT_ELEMENT:
            let newElement = {
                id: state.postsArray.length + 1,
                post_text: state.newText,
                posts_likes: 0
            };
            state.postsArray.unshift(newElement);
            state.newText = '';
            return state;
        case CHANGE_TEXTAREA:
            state.newText = action.change;
            return state;
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
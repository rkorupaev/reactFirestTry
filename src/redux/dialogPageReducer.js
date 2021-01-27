const ADD_TEXT_TEXTAREA_MESSAGE = 'ADD_TEXT_TEXTAREA_MESSAGE';
const CHANGE_TEXTAREA_MESSAGE = 'CHANGE_TEXTAREA_MESSAGE';

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_TEXT_TEXTAREA_MESSAGE:
            let newElement = {
                id: state.messagesArray.length + 1,
                item_text: state.newMessage
            };
            state.messagesArray.unshift(newElement);
            state.newMessage = '';
            return state;
        case CHANGE_TEXTAREA_MESSAGE:
            state.newMessage = action.change;
            return state;
        default:
            return state;
    }
};

export const addMessageElement = () => {
    return ({type: ADD_TEXT_TEXTAREA_MESSAGE});
}

export const changeMessageTextarea = (text) => {
    return ({type: CHANGE_TEXTAREA_MESSAGE, change: text});
}

export default dialogPageReducer;
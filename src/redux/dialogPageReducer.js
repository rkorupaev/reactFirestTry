const ADD_TEXT_TEXTAREA_MESSAGE = 'ADD_TEXT_TEXTAREA_MESSAGE';
const CHANGE_TEXTAREA_MESSAGE = 'CHANGE_TEXTAREA_MESSAGE';

let initialState = {
    messagesArray: [
        {
            id: 4,
            item_text: "Привет!"
        }, {
            id: 3,
            item_text: "Как дела?"
        }, {
            id: 2,
            item_text: "Уже приехали?!"
        }, {
            id: 1,
            item_text: "Новое сообщение"
        }
    ],
    dialogsArray: [
        {
            item_name: "Dima",
            item_id: "1"
        }, {
            item_name: "Olya",
            item_id: "2"
        }, {
            item_name: "Vasya",
            item_id: "3"
        }, {
            item_name: "John",
            item_id: "4"
        }, {
            item_name: "Kate",
            item_id: "5"
        }, {
            item_name: "Igor",
            item_id: "6"
        }
    ],
    newMessage: ""
};

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT_TEXTAREA_MESSAGE: {
            let stateCopy = {...state};
            let newElement = {
                id: state.messagesArray.length + 1,
                item_text: state.newMessage
            };
            stateCopy.messagesArray = [...state.messagesArray];
            stateCopy.messagesArray.unshift(newElement);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case CHANGE_TEXTAREA_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.change;
            return stateCopy;
        }
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
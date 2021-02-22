const ADD_TEXT_TEXTAREA_MESSAGE = 'ADD_TEXT_TEXTAREA_MESSAGE';
const CHANGE_TEXTAREA_MESSAGE = 'CHANGE_TEXTAREA_MESSAGE';

let initialState = {
    friendsArray: [
        {
            id: 1,
            item_avatar: "https://www.thispersondoesnotexist.com/image?11613988492",
            item_bio: {
                first_name: "Дима",
                last_name: "Баранов",
                item_age: 32
            },
            item_location: "Москва",
            isFollowed: true,
            item_text: "Изучаю React!"
        },
        {
            id: 2,
            item_avatar: "https://www.thispersondoesnotexist.com/image?11613988492",
            item_bio: {
                first_name: "Лена",
                last_name: "Иванова",
                item_age: 24
            },
            item_location: "Минск",
            isFollowed: false,
            item_text: "Cool, cool, cool"
        },
        {
            id: 3,
            item_avatar: "https://www.thispersondoesnotexist.com/image?11613988492",
            item_bio: {
                first_name: "Герман",
                last_name: "Бонд",
                item_age: 56
            },
            item_location: "Лондон",
            isFollowed: false,
            item_text: "I am Bond, German Bond."
        },
        {
            id: 4,
            item_avatar: "https://www.thispersondoesnotexist.com/image?11613988492",
            item_bio: {
                first_name: "Вовка",
                last_name: "Иванов",
                item_age: 14
            },
            item_location: "Норильск",
            isFollowed: false,
            item_text: "Снег, снег повсюду."
        }
    ]
};

const friendPageReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TEXT_TEXTAREA_MESSAGE: {
        //     let newElement = {
        //         id: state.messagesArray.length + 1,
        //         item_text: state.newMessage
        //     };
        //     return {
        //         ...state,
        //         messagesArray: [newElement, ...state.messagesArray],
        //         newMessage: ''
        //     };
        // }
        // case CHANGE_TEXTAREA_MESSAGE: {
        //     return {
        //         ...state,
        //         newMessage: action.change
        //     };
        // }
        default:
            return state;
    }
};
//
// export const addMessageElement = () => {
//     return ({type: ADD_TEXT_TEXTAREA_MESSAGE});
// }
//
// export const changeMessageTextarea = (text) => {
//     return ({type: CHANGE_TEXTAREA_MESSAGE, change: text});
// }

export default friendPageReducer;

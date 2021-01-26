const ADD_TEXT_ELEMENT = 'ADD_TEXT_ELEMENT';
const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';
const ADD_TEXT_TEXTAREA_MESSAGE = 'ADD_TEXT_TEXTAREA_MESSAGE';
const CHANGE_TEXTAREA_MESSAGE = 'CHANGE_TEXTAREA_MESSAGE';


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
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
        },
        sidebar: {
            sidebarFriends: [
                {name: "Дима Иванов"},
                {name: "Оля Васина"},
                {name: "Kate Pressly"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callRender() {
    },
    subscribe(observe) {
        this._callRender = observe;
    },

    dispatch(action) {
        if (action.type === 'ADD_TEXT_ELEMENT') {
            let newElement = {
                id: this._state.profilePage.postsArray.length + 1,
                post_text: this._state.profilePage.newText,
                posts_likes: 0
            };
            this._state.profilePage.postsArray.unshift(newElement);
            this._state.profilePage.newText = '';
            this._callRender(this._state);
        } else if (action.type === 'CHANGE_TEXTAREA') {
            this._state.profilePage.newText = action.change;
            this._callRender(this._state);
        } else if (action.type === 'ADD_TEXT_TEXTAREA_MESSAGE') {
            let newElement = {
                id: this._state.dialogsPage.messagesArray.length + 1,
                item_text: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.messagesArray.unshift(newElement);
            this._state.dialogsPage.newMessage = '';
            this._callRender(this._state);
        } else if (action.type === 'CHANGE_TEXTAREA_MESSAGE') {
            this._state.dialogsPage.newMessage = action.change;
            this._callRender(this._state);
        }
    }
};

export const addTextElement = () => {
    return ({type: ADD_TEXT_ELEMENT});
}

export const changeTextarea = (text) => {
    return ({type: CHANGE_TEXTAREA, change: text});
}

export const addMessageElement = () => {
    return ({type: ADD_TEXT_TEXTAREA_MESSAGE});
}

export const changeMessageTextarea = (text) => {
    return ({type: CHANGE_TEXTAREA_MESSAGE, change: text});
}

export default store;
const SET_FRIENDS = 'SET_FRIENDS';
const CHANGE_STATUS = 'CHANGE_STATUS';

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
        case SET_FRIENDS: {
            return {
                ...state, friendsArray: [...state.friendsArray, ...action.friendsList]
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

export const setFriendsAC = (friendsList) => {
    return ({type: SET_FRIENDS, friendsList});
}

export const changeStatusAC = (id) => {
    return ({type: CHANGE_STATUS, id});
}

export default friendPageReducer;

let initialState = {
    sidebarFriends: [
        {
            id: 1,
            name: "Дима Иванов"
        },
        {
            id: 2,
            name: "Оля Васина"
        },
        {
            id: 3,
            name: "Kate Presley"
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return {...state};
};

export default sidebarReducer;

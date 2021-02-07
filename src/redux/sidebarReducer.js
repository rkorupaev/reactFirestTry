let initialState = {
    sidebarFriends: [
        {name: "Дима Иванов"},
        {name: "Оля Васина"},
        {name: "Kate Presley"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return {...state};
};

export default sidebarReducer;
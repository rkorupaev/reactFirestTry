let initialState = {
    sidebarFriends: [
        {name: "Дима Иванов"},
        {name: "Оля Васина"},
        {name: "Kate Pressly"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    return stateCopy;
};

export default sidebarReducer;
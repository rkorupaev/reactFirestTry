let state = {
    dialogsPage: {
        messagesArray: [
            {
                id: 1,
                item_text: "Привет!"
            }, {
                id: 2,
                item_text: "Как дела?"
            }, {
                id: 3,
                item_text: "Уже приехали?!"
            }, {
                id: 4,
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
        ]
    },
    profilePage: {
        postsArray: [
            {
                post_text: "Not rly, just kidding)",
                posts_likes: "15"
            },
            {
                post_text: "I am so cool!",
                posts_likes: "25"
            },
            {
                post_text: "First post! Hello world!",
                posts_likes: "135"
            }
        ]
    },
    sidebar: {
        sidebarFriends: [
            {name: "Дима Иванов"},
            {name: "Оля Васина"},
            {name: "Kate Pressly"}
        ]
    }
};


export default state;
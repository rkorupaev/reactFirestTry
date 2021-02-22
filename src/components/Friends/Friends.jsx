import React from "react";
import style from "./Friends.module.css";
import FriendsItem from "./Friends_item/Friends_item";

const FriendsList = (props) => {
    let friendsItemsArray = props.friendsArray.friendsArray.map(item => <FriendsItem key={item.id}
                                                                                     item_id={item.id}
                                                                                     item_bio={item.item_bio}
                                                                                     item_location={item.item_location}
                                                                                     item_avatar={item.item_avatar}
                                                                                     item_text={item.item_text}
                                                                                     onFollowButtonClickHandler={props.onFollowButtonCLick}
                                                                                     isFollowed={item.isFollowed}/>);

    return (
        <ul className={style.friendlist}>
            {friendsItemsArray}
        </ul>
    );
};

export default FriendsList;

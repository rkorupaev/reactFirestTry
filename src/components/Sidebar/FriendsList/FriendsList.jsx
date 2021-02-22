import React from 'react';
import styles from './FriendsList.module.css';
import FriendlistItem from "./FriendListItem/FriendlistItem";

const FriendsList = (props) => {
    let sidebarNamesArray = props.sidebar.sidebarFriends.map(name => <FriendlistItem key={name.id} name={name.name}/>);

    return (
        <ul className={styles.friendslist}>
            {sidebarNamesArray}
        </ul>
    );
}

export default FriendsList;

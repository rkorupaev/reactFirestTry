import React from 'react';
import styles from './FriendsList.module.css';

const FriendsList = (props) => {
    return (
        <ul className={styles.friendslist}>
            <li>
                <a href="#">
                    <img src="#" alt="friend photo"/>
                    <p>Имя Фамилия</p>
                </a>
            </li>
        </ul>
    );
}

export default FriendsList;
import React from 'react';
import styles from './FreindlistItem.module.css';

const FriendlistItem = (props)=> {
    return (
        <li>
            <a className={styles.item_link} href="#">
                <img className={styles.image} src="https://thispersondoesnotexist.com/image" alt="friend photo"/>
                <p>{props.name}</p>
            </a>
        </li>
    );
};

export default FriendlistItem;
import React from "react";
import style from "./Friends_item.module.css";

const FriendsItem = (props) => {
    let onFollowButtonClickHandler = () => {
        props.onFollowButtonClickHandler(props.item_id)
    };

    return (
        <li className={style.friendlist__item}>
            <div className={style.item__infoblock}>
                <div className={style.item__avablock}>
                    <img className={style.item__image}
                         src={props.item_avatar}
                         alt={props.item_bio.first_name + ` ` + props.item_bio.last_name} width="50" height="50"/>
                    {props.isFollowed ? <button onClick={onFollowButtonClickHandler}
                                                className={style.item__button}>Follow</button> :
                        <button onClick={onFollowButtonClickHandler}
                                className={style.item__button}>Unfollow</button>
                    }
                </div>
                <div className={style.item__bio}>
                    <h2>{props.item_bio.first_name}{props.item_bio.last_name}</h2>
                    <p><span>{props.item_bio.item_age}</span>года</p>
                    <p>{props.item_location}</p>
                </div>
            </div>
            <div className={style.item__status}>
                <p>{props.item_text}</p>
            </div>
        </li>
    );
};

export default FriendsItem;

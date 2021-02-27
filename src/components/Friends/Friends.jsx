import React from "react";
import style from "./Friends.module.css";
import * as axios from "axios";

class FriendsList extends React.Component {

    constructor(props) {
        super(props);

        axios.get("http://localhost:4000/friends").then(response => {
            this.props.setFriends(response.data)
        });
    };

    render() {
        return (
            <ul className={style.friendlist}>
                {
                    this.props.friendsArray.map(friend =>
                        <li className={style.friendlist__item}>
                            <div className={style.item__infoblock}>
                                <div className={style.item__avablock}>
                                    <img className={style.item__image}
                                         src={friend.item_avatar}
                                         alt={friend.item_bio.first_name + ` ` + friend.item_bio.last_name}/>
                                    {friend.isFollowed ?
                                        <button onClick={() => this.props.onFollowButtonCLick(friend.id)}
                                                className={style.item__button}>Follow</button> :
                                        <button onClick={() => this.props.onFollowButtonCLick(friend.id)}
                                                className={style.item__button}>Unfollow</button>
                                    }
                                </div>
                                <div className={style.item__bio}>
                                    <h2>{friend.item_bio.first_name} {friend.item_bio.last_name}</h2>
                                    <p><span>{friend.item_bio.item_age}</span>года</p>
                                    <p>{friend.item_location}</p>
                                </div>
                            </div>
                            <div className={style.item__status}>
                                <p>{friend.item_text}</p>
                            </div>
                        </li>
                    )}
            </ul>)
    }
};

export default FriendsList;

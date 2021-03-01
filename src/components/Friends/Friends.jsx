import React from "react";
import style from "./Friends.module.css";
import * as axios from "axios";

class FriendsList extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setFriends(response.data.items)
        });
    };

    onPageButtonClickHandler = (pageNumber) => {
        this.props.onPageButtonClick(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setFriends(response.data.items)
        });
    };


    render() {
        let totalPageCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pageButtonsArray = [];
        for (let i = 0; i < totalPageCount; i++) {
            pageButtonsArray.push(i + 1);
        }

        return (
            <div>
                <ul className={style.friendlist__pagination}>
                    {pageButtonsArray.map(page => <li onClick={(evt) => {
                        this.onPageButtonClickHandler(page);
                    }}
                                                      className={[style.pagination__item, this.props.currentPage === page && style.activepage].join(' ')}>{page}</li>)}
                </ul>
                <ul className={style.friendlist}>
                    {
                        this.props.friendsArray.map(friend =>
                            <li className={style.friendlist__item}>
                                <div className={style.item__infoblock}>
                                    <div className={style.item__avablock}>
                                        <img className={style.item__image}
                                             src={friend.photos.large}
                                             alt={friend.name}/>
                                        {friend.followed ?
                                            <button onClick={() => this.props.onFollowButtonCLick(friend.id)}
                                                    className={style.item__button}>Follow</button> :
                                            <button onClick={() => this.props.onFollowButtonCLick(friend.id)}
                                                    className={style.item__button}>Unfollow</button>
                                        }
                                    </div>
                                    <div className={style.item__bio}>
                                        <h2>{friend.name}</h2>
                                        <p><span>friend.age</span>года</p>
                                        <p>friend.location</p>
                                    </div>
                                </div>
                                <div className={style.item__status}>
                                    <p>friend.item_text</p>
                                </div>
                            </li>
                        )}
                </ul>
            </div>)
    }
};

export default FriendsList;

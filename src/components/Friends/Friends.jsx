import React from "react";
import style from "./Friends.module.css";
import userDefaultIcon from "./../../img/user.png";

let FriendsList = (props) => {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
    //         this.props.setFriends(response.data.items)
    //         this.props.setTotalPages(response.data.totalCount)
    //     });
    // };
    //
    // onPageButtonClickHandler = (pageNumber) => {
    //     this.props.onPageButtonClick(pageNumber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
    //         this.props.setFriends(response.data.items)
    //     });
    // };

    let totalPageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pageButtonsArray = [];
    for (let i = 0; i < totalPageCount; i++) {
        pageButtonsArray.push(i + 1);
    }

    let pageButtonsArrayVisible = [];
    for (let i = 0; i < 5; i++) {
        pageButtonsArrayVisible.push(pageButtonsArray[i]);
    }

    return (
        <div>
            <ul className={style.friendlist__pagination}>
                {pageButtonsArrayVisible.map(page => <li onClick={(evt) => {
                    props.onPageButtonClickHandler(page);
                }}
                                                         className={[style.pagination__item, props.currentPage === page && style.activepage].join(' ')}>{page}</li>)}
            </ul>
            <ul className={style.friendlist}>
                {
                    props.friendsArray.map(friend =>
                        <li className={style.friendlist__item}>
                            <div className={style.item__infoblock}>
                                <div className={style.item__avablock}>
                                    <img className={style.item__image}
                                         src={friend.photos.large != null ? friend.photos.large : userDefaultIcon}
                                         alt={friend.name}/>
                                    {friend.followed ?
                                        <button onClick={() => props.onFollowButtonCLick(friend.id)}
                                                className={style.item__button}>Follow</button> :
                                        <button onClick={() => props.onFollowButtonCLick(friend.id)}
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
};

export default FriendsList;

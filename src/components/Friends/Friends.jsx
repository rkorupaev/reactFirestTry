import React from "react";
import style from "./Friends.module.css";
import userDefaultIcon from "./../../img/user.png";
import preloaderHorizontal from "./../../img/preloader.gif"

let FriendsList = (props) => {

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
            <div className={props.isFetching ? style.friendlist__preloader : [style.hidden, style.friendlist__preloader].join(` `)}><img src={preloaderHorizontal}/></div>
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

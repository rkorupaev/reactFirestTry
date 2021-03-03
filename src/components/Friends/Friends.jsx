import React from "react";
import style from "./Friends.module.css";
import userDefaultIcon from "./../../img/user.png";
import preloaderHorizontal from "./../../img/preloader.gif"

let FriendsList = (props) => {
        let totalPageCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pageButtonsArray = [];
        for (let i = 0; i < totalPageCount; i++) {
            pageButtonsArray.push(i);
        }

        let pageButtonsArrayVisible = [];

        if (props.currentPage > 2 && props.currentPage < totalPageCount - 2) {
            for (let i = props.currentPage - 2; i < props.currentPage + 3; i++) {
                pageButtonsArrayVisible.push(pageButtonsArray[i]);
            }
        } else {
            for (let j = 0; j < 5; j++) {
                pageButtonsArrayVisible.push(pageButtonsArray[j]);
            }
        }

        return (
            <div>
                <div className={style.friendlist__topblock}>
                    <button className={style.friendlist__pagebuttons} onClick={() => {
                        props.onPrevPageCLickHandler(props.currentPage)
                    }}>prev
                    </button>
                    <ul className={style.friendlist__pagination}>
                        {pageButtonsArrayVisible.map(page => <li tabIndex="0" onClick={(evt) => {
                            props.onPageButtonClickHandler(page);
                        }}
                                                                 className={[style.pagination__item, props.currentPage === page && style.activepage].join(' ')}>{page}</li>)}
                    </ul>
                    <button className={style.friendlist__pagebuttons}
                            onClick={() => {
                                props.onNextPageCLickHandler(props.currentPage)
                            }}>next
                    </button>
                </div>
                <div
                    className={props.isFetching ? style.friendlist__preloader : [style.hidden, style.friendlist__preloader].join(` `)}>
                    <img src={preloaderHorizontal}/></div>
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
    }
;

export default FriendsList;

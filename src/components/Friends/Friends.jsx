import React from "react";
import style from "./Friends.module.css";

const FriendsList = () => {
    return (
        <ul className={style.friendlist}>
            <li className={style.friendlist__item}>
                <div className={style.item__infoblock}>
                    <div className={style.item__avablock}>
                        <img className={style.item__image}
                             src="https://www.thispersondoesnotexist.com/image?11613988492"
                             alt="Дима Борисов" width="50" height="50"/>
                        <button className={style.item__button}>Follow</button>
                    </div>
                    <div className={style.item__bio}>
                        <h2>Дима Баранов</h2>
                        <p><span>32</span>года</p>
                        <p>Москва</p>
                    </div>
                </div>
                <div className={style.item__status}>
                    <p>Изучаю REACT.</p>
                </div>
            </li>
        </ul>
    );
};

export default FriendsList;

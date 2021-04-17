import React, {useState} from "react";
import style from './MyProfile.module.css';

const MyProfile = (props) => {
    const [isEditActive, setIsEditActive] = useState(false);

    return (
        <div>
            <h1>Мой профиль</h1>
            {!isEditActive ?
                <p onDoubleClick={() => setIsEditActive(true)}>Мой
                    статус: <span>{props.statusText}</span></p> :
                <input autoFocus={true} onBlur={() => setIsEditActive(false)} placeholder="Тут будет мой статус"
                       value={props.statusText}/>}
        </div>
    )

}


export default MyProfile;

import React, {useState} from "react";
import style from './MyProfile.module.css';

const MyProfile = (props) => {
    const [isEditActive, setIsEditActive] = useState(false);
    const [status, setStatus] = useState(props.statusText);

    const onOutOfFocusHandler = () => {
        setIsEditActive(false);
        props.updateUserStatus(status);
    };

    return (
        <div>
            <h1>Мой профиль</h1>
            {!isEditActive ?
                <p onDoubleClick={() => setIsEditActive(true)}>Мой
                    статус: <span>{props.statusText}</span></p> :
                <input autoFocus={true} onBlur={onOutOfFocusHandler} onChange={(e) => setStatus(e.currentTarget.value)} placeholder="Тут будет мой статус"
                       value={status}/>}
        </div>
    )

}


export default MyProfile;

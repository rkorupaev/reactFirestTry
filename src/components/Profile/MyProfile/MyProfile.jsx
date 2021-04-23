import React, {useState} from "react";
import style from './MyProfile.module.css';
import ProfileTextareaContainer from "../Profile_feed/Profile_textarea/Profile_textarea_container";
import Profile_posts_container from "../Profile_feed/Profile_posts/Profile_posts_container";

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
                <input autoFocus={true} onBlur={onOutOfFocusHandler} onChange={(e) => setStatus(e.currentTarget.value)}
                       placeholder="Тут будет мой статус"
                       value={status}/>}
            <ProfileTextareaContainer/>
            <Profile_posts_container/>
        </div>
    )

}


export default MyProfile;

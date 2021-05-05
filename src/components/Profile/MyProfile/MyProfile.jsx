import React, {useEffect, useState} from "react";
import style from './MyProfile.module.css';
import ProfileTextareaContainer from "../Profile_feed/Profile_textarea/Profile_textarea_container";
import Profile_posts_container from "../Profile_feed/Profile_posts/Profile_posts_container";

const MyProfile = (props) => {
    const [isEditActive, setIsEditActive] = useState(false);
    const [status, setStatus] = useState(props.statusText);

    const changeStatusText = (e) => {
        setStatus(e.currentTarget.value)
    };

    const onOutOfFocusHandler = () => {
        setIsEditActive(false);
        props.updateUserStatus(status);
    };

    useEffect(() => {
         setStatus(props.statusText)
    }, [props.statusText]);

    return (
        <div>
            <h1>Мой профиль</h1>
            {!isEditActive ?
                <p onDoubleClick={() => setIsEditActive(true)}>Мой
                    статус: <span>{props.statusText}</span></p> :
                <input autoFocus={true} onBlur={onOutOfFocusHandler} onChange={changeStatusText}
                       placeholder="Тут будет мой статус"
                       value={status}/>}
            <ProfileTextareaContainer/>
            <Profile_posts_container/>
        </div>
    )

}


export default MyProfile;

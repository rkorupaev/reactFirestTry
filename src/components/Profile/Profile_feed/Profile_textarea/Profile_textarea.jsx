import React from "react";

const ProfileTextarea = (props) => {

    let newPostTextArea = React.createRef();

    let onButtonClickHandler = () => {
        props.onButtonClickHandler();
    };

    let textareaOnChangeHandler = () => {
        props.textareaOnChangeHandler(newPostTextArea.current.value);
    };

    return (
        <div>
            <textarea placeholder="Что нового?" ref={newPostTextArea} onChange={textareaOnChangeHandler}
                      value={props.newText}/>
            <button onClick={onButtonClickHandler}>Send</button>
        </div>
    );
}
export default ProfileTextarea;
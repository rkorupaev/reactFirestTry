import React from "react";
import style from './MyProfile.module.css';

class MyProfile extends React.Component {

    state = {
        isEditActive: false
    }

    onStatusDoubleClickHandler = () => {
        this.setState({
            isEditActive: true
        });
    }

    onOutOfStatusClickHandler = () => {
        this.setState({
            isEditActive: false
        });
    }

    render() {
        return (
            <div>
                <h1>Мой профиль</h1>
                {!this.state.isEditActive ?
                    <p onDoubleClick={this.onStatusDoubleClickHandler}>Мой
                        статус: <span>{this.props.status__text}</span></p> :
                    <input autoFocus={true} onBlur={this.onOutOfStatusClickHandler} placeholder="Тут будет мой статус"
                           value={this.props.status__text}/>}
            </div>
        )
    }
}


export default MyProfile;

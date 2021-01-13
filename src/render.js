import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addTextElement, changeTextarea} from "./redux/state";

export let entireRerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addTextElement={addTextElement} changeTextarea={changeTextarea}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

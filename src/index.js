import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';

let entireRerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addTextElement={store.addTextElement.bind(store)} changeTextarea={store.changeTextarea.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

entireRerender(store.getState());
store.subscribe(entireRerender);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

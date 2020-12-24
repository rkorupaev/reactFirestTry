import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesArray = [
    {
        id: 1,
        item_text: "Привет!"
    }, {
        id: 2,
        item_text: "Как дела?"
    }, {
        id: 3,
        item_text: "Уже приехали?!"
    }, {
        id: 4,
        item_text: "Новое сообщение"
    }
];

let dialogsArray = [
    {
        item_name: "Dima",
        item_id: "1"
    }, {
        item_name: "Olya",
        item_id: "2"
    }, {
        item_name: "Vasya",
        item_id: "3"
    }, {
        item_name: "John",
        item_id: "4"
    }, {
        item_name: "Kate",
        item_id: "5"
    }, {
        item_name: "Igor",
        item_id: "6"
    }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsArray={dialogsArray} messagesArray={messagesArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

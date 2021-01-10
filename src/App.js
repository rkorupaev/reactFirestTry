import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import generalStyles from "./components/General.module.css";
import styles from "./components/Main.module.css";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app__wrapper">
                    <Header/>
                    <main className={`${generalStyles.container} ${styles.main__container}`}>
                        <Sidebar state={props.state.sidebar}/>
                        <Content state={props.state}/>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

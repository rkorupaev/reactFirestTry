import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import generalStyles from "./components/General.module.css";
import styles from "./components/Main.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Video from "./components/Video/Mucis";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app__wrapper">
                    <Header/>
                    <main className={`${generalStyles.container} ${styles.main__container}`}>
                        <Sidebar/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/video" component={Video}/>
                        <Route path="/settings" component={Settings}/>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import generalStyles from "./components/General.module.css";
import styles from "./components/Main.module.css";

const App = () => {
    return (
        <div className="App">
            <div className="app__wrapper">
                <Header/>
                <main className={`${generalStyles.container} ${styles.main__container}`}>
                    <Sidebar/>
                    <Profile/>
                </main>

            </div>
        </div>
    );
}

export default App;

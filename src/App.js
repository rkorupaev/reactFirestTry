import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import generalStyles from "./components/General.module.css";
import styles from "./components/Main.module.css";
import {BrowserRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {initApp} from "./redux/appReducer";

const App = (props) => {
    useEffect(() => {
        props.initApp();
    });

    if (!props.initialized) {
        return <div>
            <h2>Грузим приложение</h2>
        </div>
    }

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app__wrapper">
                    <Header/>
                    <main className={`${generalStyles.container} ${styles.main__container}`}>
                        <Sidebar/>
                        <Content/>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initApp.initialized
    }
}

export default compose(connect(mapStateToProps, {initApp}))(App);

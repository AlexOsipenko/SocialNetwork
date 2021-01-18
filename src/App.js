import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/DIalogs/DialogsContainer";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}
                    />
                </div>
            </div>
    );
}


export default App;

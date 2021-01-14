import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost} from './redux/state'

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={AddPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


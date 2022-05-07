import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {StateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType, addPost: (postMessage: string) => void) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";

// Posts data on Profile Page (initial state)
export type PostsDataType = {
    id: number;
    message: string;
    likesCount: number;
}
const postsData: Array<PostsDataType> = [
    {id: 1, message: "Hello, how are you?", likesCount: 0},
    {id: 2, message: "Let's play a game", likesCount: 11},
    {id: 3, message: "Message 4", likesCount: 11},
    {id: 4, message: "Message 5", likesCount: 83},
]

// Names data Dialogs page (initial state)
export type DialogsDataType = {
    id: number,
    name: string,
}
const dialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Name1"},
    {id: 2, name: "Name2"},
    {id: 3, name: "Name3"},
    {id: 4, name: "Name4"},
    {id: 5, name: "Name5"},
    {id: 6, name: "Name6"},
]

// Messages data on Dialogs page (initial state)
export type MessageDataType = {
    id: number,
    message: string,
}
const messagesData: Array<MessageDataType> = [
    {id: 1, message: "Message 1"},
    {id: 2, message: "Message 2"},
    {id: 3, message: "Message 3"},
    {id: 4, message: "Message 4"},
    {id: 5, message: "Message 5"},
    {id: 6, message: "Message 6"},
]

ReactDOM.render(
    <BrowserRouter>
        <App
            postsData={postsData}
            dialogsData={dialogsData}
            messagesData={messagesData}
        />
    </BrowserRouter>,
  document.getElementById('root')
);
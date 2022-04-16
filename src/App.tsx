import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {DialogsDataType, MessageDataType, PostsDataType} from "./index";

type AppPropsType = {
    postsData: Array<PostsDataType>,
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessageDataType>,
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/"
                           element={<Profile postsData={props.postsData}/>}/>
                    <Route path="/profile"
                           element={<Profile postsData={props.postsData}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path="/news"
                           element={<News/>}/>
                    <Route path="/music"
                           element={<Music/>}/>
                    <Route path="/settings"
                           element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

export type DialogDataType = {
    id: number,
    name: string,
}
export type MessageDataType = {
    id: number,
    message: string,
}
type DialogType = {}

export const Dialogs: React.FC<DialogType> = (props) => {
    // Names data (initial state)
    let DialogData: Array<DialogDataType> = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
        {id: 4, name: "Name4"},
        {id: 5, name: "Name5"},
        {id: 6, name: "Name6"},
    ]
    // Messages data (initial state)
    let MessageData: Array<MessageDataType> = [
        {id: 1, message: "Message 1"},
        {id: 2, message: "Message 2"},
        {id: 3, message: "Message 3"},
        {id: 4, message: "Message 4"},
        {id: 5, message: "Message 5"},
        {id: 6, message: "Message 6"},
    ]
    // Function to render names list from data (map)
    const namesList = DialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // Function to render messages list from data (map)
    const messagesList = MessageData.map(m => <MessageItem message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {namesList}
            </div>
            <div className={s.messages}>
                {messagesList}
            </div>
        </div>
    );
};
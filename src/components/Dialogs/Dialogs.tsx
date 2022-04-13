import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number,
    name: string,
}
type MessageType = {
    message: string,
}
type DialogDataType = {
    id: number,
    name: string,
}
type MessageDataType = {
    id: number,
    name: string,
}
type DialogType = {}

// Function to render one element from names list
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.dialogActive : s.dialog}>{props.name}</NavLink>
        </div>
    )
}
// Function to render one element from messages list
const MessageItem = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

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
        {id: 1, name: "Message 1"},
        {id: 2, name: "Message 2"},
        {id: 3, name: "Message 3"},
        {id: 4, name: "Message 4"},
        {id: 5, name: "Message 5"},
        {id: 6, name: "Message 6"},
    ]
    // Function to render names list from data (map)
    const namesList = DialogData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // Function to render messages list from data (map)
    const messagesList = MessageData.map(m => <MessageItem message={m.name}/>)

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
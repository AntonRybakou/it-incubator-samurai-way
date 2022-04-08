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

// Функция отрисовки одного элемента из списка имен
const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.dialogActive : s.dialog}>{props.name}</NavLink>
        </div>
    )
}
// Функция отрисовки одного элемента из списка сообщений
const MessageItem = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs: React.FC<DialogType> = (props) => {
    // Данные для отрисовки списка имен
    let DialogData: Array<DialogDataType> = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
        {id: 4, name: "Name4"},
        {id: 5, name: "Name5"},
        {id: 6, name: "Name6"},
    ]
    // Данные для отрисовки сообщений
    let MessageData: Array<MessageDataType> = [
        {id: 1, name: "Message 1"},
        {id: 2, name: "Message 2"},
        {id: 3, name: "Message 3"},
        {id: 4, name: "Message 4"},
        {id: 5, name: "Message 5"},
        {id: 6, name: "Message 6"},
    ]
    // Функция отрисовки всего списка имен
    const nameList = (DialogData.map(d => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    }))
    //Функция отрисовки всего списка сообщений
    const messageList = MessageData.map(m => {
        return (
            <MessageItem message={m.name}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {nameList}
            </div>
            <div className={s.messages}>
                {messageList}
            </div>
        </div>
    );
};
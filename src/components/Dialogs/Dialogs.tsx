import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsDataType, MessageDataType} from "../../index";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessageDataType>,
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    // Function to render names list from data (map)
    const namesList = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // Function to render messages list from data (map)
    const messagesList = props.messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)

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
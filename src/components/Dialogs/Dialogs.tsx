import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    // Function to render names list from data (map)
    const namesList = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // Function to render messages list from data (map)
    const messagesList = props.state.messagesData.map(m => <MessageItem message={m.message} id={m.id}/>)

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
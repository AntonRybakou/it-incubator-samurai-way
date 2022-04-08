import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
}
type MessageType = {
    message: string,
}
type DialogType = {

}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.dialogActive : s.dialog}>{props.name}</NavLink>
        </div>
    )
}
const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs: React.FC<DialogType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Name1'} id={1}/>
                <DialogItem name={'Name2'} id={2}/>
                <DialogItem name={'Name3'} id={3}/>
                <DialogItem name={'Name4'} id={4}/>
                <DialogItem name={'Name5'} id={5}/>
                <DialogItem name={'Name6'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'something 1'}/>
                <Message message={'something 2'}/>
                <Message message={'something 3'}/>

            </div>
        </div>
    );
};
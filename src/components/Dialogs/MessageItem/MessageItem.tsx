import React from 'react';
import s from '../Dialogs.module.css';
import {MessageDataType} from "../Dialogs";

// Function to render one element from messages list
export const MessageItem = (props: MessageDataType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
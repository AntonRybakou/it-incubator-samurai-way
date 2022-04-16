import React from 'react';
import s from '../Dialogs.module.css';

type MessageItemPropsType = {
    id: number,
    message: string,
}

// Function to render one element from messages list
export const MessageItem: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={s.message} key={props.id}>
            {props.message}
        </div>
    )
}
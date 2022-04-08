import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Name1
                </div>
                <div className={s.dialog}>
                    Name2
                </div>
                <div className={s.dialog}>
                    Name3
                </div>
                <div className={s.dialog}>
                    Name4
                </div>
                <div className={s.dialog}>
                    Name5
                </div>
                <div className={s.dialog}>
                    Name6
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    message1
                </div>
                <div className={s.message}>
                    message2
                </div>
                <div className={s.message}>
                    message3
                </div>
            </div>
        </div>
    );
};
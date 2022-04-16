import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number,
}

// Function to render one element from names list
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.dialogActive : s.dialog}>{props.name}</NavLink>
        </div>
    )
}
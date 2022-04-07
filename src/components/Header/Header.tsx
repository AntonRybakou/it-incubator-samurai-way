import React from 'react';
import s from './Header.module.css';

export const Header: React.FC<any> = (props) => {
    return (
        <>
        <div className={s.header}>
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                 alt={"Logo image"}/>
        </div>
        <div className={s.loader_wrapper}>
            <div className={s.loader}>
                <div className={s.loader_inner}/>
            </div>
        </div>

        </>
    )
}
import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo: React.FC<any> = (props) => {
    return (
        <div>
            <img src="https://www.teahub.io/photos/full/225-2258573_outer-space-minimalist-wallpaper-hd.jpg"
                 alt={"Some image"}/>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}
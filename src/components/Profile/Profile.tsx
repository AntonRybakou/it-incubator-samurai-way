import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile: React.FC<any> = (props) => {
    return (
        <div className={s.content}>
            <img src="https://www.teahub.io/photos/full/225-2258573_outer-space-minimalist-wallpaper-hd.jpg"
                 alt={"Some image"}/>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}
import React from 'react';
import s from './Profile.module.css'

export const Profile: React.FC<any> = (props) => {
    return (
        <div className={s.content}>
            <img src="https://www.teahub.io/photos/full/225-2258573_outer-space-minimalist-wallpaper-hd.jpg"
                 alt={"Some image"}/>
            <div>ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                </div>
            </div>

        </div>
    )
}
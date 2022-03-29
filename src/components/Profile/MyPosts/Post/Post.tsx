import React from 'react';
import s from './Post.module.css'

export const Post: React.FC<any> = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://images.vexels.com/media/users/3/235242/isolated/preview/b501e9263eddd732f799cfac64085e78-astronaut-space-helmet-badge.png"
                alt='Avatar'/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}
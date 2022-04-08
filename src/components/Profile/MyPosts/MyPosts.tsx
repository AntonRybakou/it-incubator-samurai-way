import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts: React.FC<any> = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hello, how are you?" likesCount="0"/>
                <Post message="Let's play a game" likesCount="11"/>
            </div>
        </div>
    )
}
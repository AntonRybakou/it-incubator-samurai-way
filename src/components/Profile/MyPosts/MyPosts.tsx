import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostsDataType = {
    id: number;
    message: string;
    likesCount: number;
}


export const MyPosts: React.FC<any> = (props) => {

    // Данные для списка сообщений
    let postsData: Array<PostsDataType> = [
        {id:1, message: "Hello, how are you?", likesCount: 0},
        {id:2, message: "Let's play a game", likesCount: 11},
        {id:3, message: "Message 4", likesCount: 11},
        {id:4, message: "Message 5", likesCount: 83},
    ]
    // Функция отрисовки всего списка сообщений
    const PostsList = ( postsData.map( p => {
        return <Post message={p.message} likesCount={p.likesCount}/>
    } ) )

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
                {PostsList}
            </div>
        </div>
    )
}
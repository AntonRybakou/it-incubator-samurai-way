import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    postsData: Array<PostsDataType>,
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    // Function to render all posts from data (map)
    const postsList = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsList}
            </div>
        </div>
    )
}
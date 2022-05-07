import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    postsData: Array<PostsDataType>,
    addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    // Function to render all posts from data (map)
    const postsList = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    // Create a reference to text in the text area
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    // Callback function for button to add post
    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            props.addPost(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder={'type message'}
                        ref={newPostElement}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsList}
            </div>
        </div>
    )
}
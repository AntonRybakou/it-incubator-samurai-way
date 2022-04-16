import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../index";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}
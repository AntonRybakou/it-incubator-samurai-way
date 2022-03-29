import React from 'react';

export const Profile: React.FC<any> = (props) => {
  return (
      <div className={"content"}>
          <img src="https://www.teahub.io/photos/full/225-2258573_outer-space-minimalist-wallpaper-hd.jpg" alt={"Some image"}/>
          <div>ava + description</div>
          <div>My posts</div>
          <div>New post</div>
          <div>Post1</div>
          <div>Post2</div>
      </div>
  )
}
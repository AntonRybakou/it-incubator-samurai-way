import React from 'react';

export const Navbar: React.FC<any> = (props) => {
  return (
      <div className={"nav"}>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
      </div>
  )
}
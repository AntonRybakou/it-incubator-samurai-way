import React from 'react';
import './App.css';

export const App: React.FC<any> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <header className="header">
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt={"Logo image"} />
            </header>

            <nav className={"nav"}>
                <div><a>Profile</a></div>
                <div><a>Nessages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>

            <main className={"content"}>
                <img src="https://www.teahub.io/photos/full/225-2258573_outer-space-minimalist-wallpaper-hd.jpg" alt={"Some image"}/>
                <div>ava + description</div>
                <div>My posts</div>
                <div>New post</div>
                <div>Post1</div>
                <div>Post2</div>
            </main>
            <footer/>
        </div>
    );
}

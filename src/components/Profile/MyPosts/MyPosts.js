import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div><textarea/>
                <div>
                    <button>new post</button>
                </div>
            </div>
            <div>
                <Post message='Hello everyone'/>
                <Post message='Its my blog'/>
                <Post message='Like a twitter'/>
                <Post message='But better'/>
            </div>
        </div>
    )
}

export default MyPosts

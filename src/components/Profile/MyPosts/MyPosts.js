import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

let PostsData = [
    {id: 1, message: 'hello everyone'},
    {id: 2, message: 'its my blog'},
    {id: 3, message: 'like twitter'},
    {id: 4, message: 'but better'}
]

const MyPosts = () => {
    return (
        <div>
            <div><textarea/>
                <div>
                    <button>new post</button>
                </div>
            </div>
            <div>
                <Post message={PostsData[0].message}/>
                <Post message={PostsData[1].message}/>
                <Post message={PostsData[2].message}/>
                <Post message={PostsData[3].message}/>
            </div>
        </div>
    )
}

export default MyPosts


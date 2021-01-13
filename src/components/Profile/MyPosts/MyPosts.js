import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostsData = props.PostsData.map(post => <Post message={post.message}/>)
    return (
        <div>
            <div><textarea/>
                <div>
                    <button>new post</button>
                </div>
            </div>
            <div>
                {newPostsData}
            </div>
        </div>
    )
}

export default MyPosts


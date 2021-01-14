import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostsData = props.PostsData.map(post => <Post message={post.message}/>)
    let newPostElement = React.createRef()
    const newPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ''
    }


    return (
        <div>
            <div><textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={ newPost }>new post</button>
                </div>
            </div>
            <div>
                {newPostsData.reverse()}
            </div>
        </div>
    )
}

export default MyPosts


import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {
    let newPostsData = props.state.PostsData.map(post => <Post message={post.message}/>)
    let newPostElement = React.createRef()
    const addPost = () => {
        props.addPost()
    }
    const onChangePost = () => {
        let text = newPostElement.current.value;
        props.changePost(text)

    }

    return (
        <div>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.state.NewPost}/>
                <div>
                    <button onClick={addPost}>new post</button>
                </div>
            </div>
            <div>
                {newPostsData.reverse()}
            </div>
        </div>
    )
}

export default MyPosts


import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostsData = props.ProfilePage.PostsData.map(post => <Post message={post.message}/>)
    let newPostElement = React.createRef()
    const newPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onChangePost =() =>{
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST', newText: text})

    }

    return (
        <div>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.ProfilePage.NewPost}/>
                <div>
                    <button onClick={newPost}>new post</button>
                </div>
            </div>
            <div>
                {newPostsData.reverse()}
            </div>
        </div>
    )
}

export default MyPosts


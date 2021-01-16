import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let newPostsData = props.ProfilePage.PostsData.map(post => <Post message={post.message}/>)
    let newPostElement = React.createRef()
    const AddPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(changePostActionCreator(text))

    }

    return (
        <div>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.ProfilePage.NewPost}/>
                <div>
                    <button onClick={AddPost}>new post</button>
                </div>
            </div>
            <div>
                {newPostsData.reverse()}
            </div>
        </div>
    )
}

export default MyPosts


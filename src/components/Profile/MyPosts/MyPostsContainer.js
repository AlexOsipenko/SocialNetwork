import React from "react";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const onChangePost = (text) => {
        props.store.dispatch(changePostActionCreator(text))

    }

    return (
        <MyPosts changePost={onChangePost} addPost={addPost} state={state.ProfilePage}/>
    )
}

export default MyPostsContainer


import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.state.PostsData}
                     addPost={props.addPost}
                     updatePost={props.updatePost} newPost={props.state.NewPost}
            />
        </div>

    )
}

export default Profile

import React from "react";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changePost: (text) => {
            dispatch(changePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer


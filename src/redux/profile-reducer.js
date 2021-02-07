import {getProfileApi} from "../api/api";


const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    PostsData: [
        {id: 1, message: 'hello everyone'},
        {id: 2, message: 'its my blog'},
        {id: 3, message: 'like twitter'},
        {id: 4, message: 'but better'},
    ],
    NewPost: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.NewPost
            }
            return  {
                ...state,
                PostsData: [...state.PostsData, newPost],
                NewPost: ''
            }
        case  UPDATE_NEW_POST:
            return  {
                ...state,
                NewPost: action.newText}
        case  SET_USER_PROFILE:
            return  {
                ...state,
                profile: action.profile}
        default:
            return state

    }

}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        getProfileApi(userId)
            .then(response => {
                // this.props.toggleIsFetching(false)
                dispatch(setUserProfile(response.data))
            })
    }
}

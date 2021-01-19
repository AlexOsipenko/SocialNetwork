const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'

let initialState = {
    PostsData: [
        {id: 1, message: 'hello everyone'},
        {id: 2, message: 'its my blog'},
        {id: 3, message: 'like twitter'},
        {id: 4, message: 'but better'},
    ],
    NewPost: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.NewPost
            }
            let stateCopy = {...state}
            stateCopy.PostsData = [...state.PostsData]
            stateCopy.PostsData.push(newPost)
            stateCopy.NewPost = ''
            return stateCopy
        }
        case  UPDATE_NEW_POST:
            let stateCopy = {...state}
            stateCopy.NewPost = action.newText
            return stateCopy
        default:
            return state

    }

}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

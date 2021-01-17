const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.NewPost
            }

            state.PostsData.push(newPost)
            state.NewPost = ''
            return state
        case  UPDATE_NEW_POST:
            state.NewPost = action.newText
            return state
        default:
            return state

    }
    
}

export default profileReducer

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

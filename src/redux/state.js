let rerender = () => {
    console.log('change')
}

let state = {
    DialogsPage: {
        DialogsData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Igor'},
            {id: 3, name: 'Sasha'}
        ],
        MessagesData: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'ha'},
            {id: 3, message: 'ho'},
        ],
    },
    ProfilePage: {
        PostsData: [
            {id: 1, message: 'hello everyone'},
            {id: 2, message: 'its my blog'},
            {id: 3, message: 'like twitter'},
            {id: 4, message: 'but better'},
        ],
        NewPost: '',
    },
}

export const AddPost = () => {
    let newPost = {
        id: 5,
        message: state.ProfilePage.NewPost
    }

    state.ProfilePage.PostsData.push(newPost)
    state.ProfilePage.NewPost = ''
    rerender(state)
}

export const updateNewPost = (newText) => {
    state.ProfilePage.NewPost = newText
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer
}

export default state;


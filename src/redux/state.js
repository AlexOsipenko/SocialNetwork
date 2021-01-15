let store = {
    _state: {
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
    },
    _callSubscriber  () {
        console.log('change')
    },

    getState () {
        return this._state
    },
    subscribe  (observer)  {
        this._callSubscriber = observer
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.ProfilePage.NewPost
            }

            this._state.ProfilePage.PostsData.push(newPost)
            this._state.ProfilePage.NewPost = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST'){
            this._state.ProfilePage.NewPost = action.newText
            this._callSubscriber(this._state)
        }
    }


}


export default store;


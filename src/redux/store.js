import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

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
            NewMessage: ''
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
    _callSubscriber() {
        console.log('change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)

        this._callSubscriber(this._state)


    }
}




export default store;


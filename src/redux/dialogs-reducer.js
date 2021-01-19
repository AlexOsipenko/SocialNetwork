const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.NewMessage
            }
            return  {
                ...state,
                MessagesData: [...state.MessagesData, newMessage],
                NewMessage: ''
            }
        case  UPDATE_NEW_MESSAGE:
            return  {
                ...state,
                NewMessage: action.newMessage
            }
        default:
            return state

    }

}
export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE, newMessage: message})

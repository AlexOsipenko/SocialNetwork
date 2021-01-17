const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.NewMessage
            }

            state.MessagesData.push(newMessage)
            state.NewMessage = ''
            return state
        case  UPDATE_NEW_MESSAGE:
            state.NewMessage = action.newMessage
            return state
        default:
            return state

    }

}
export default dialogsReducer

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE, newMessage: message})

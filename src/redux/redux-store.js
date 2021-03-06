import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
        ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        UsersPage: usersReducer,
        auth: authReducer

    }
)


let store = createStore(redusers, applyMiddleware(thunkMiddleware))


export default store

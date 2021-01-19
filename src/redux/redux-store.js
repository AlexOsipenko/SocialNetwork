import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let redusers = combineReducers({
        ProfilePage: profileReducer,
        DialogsPage: dialogsReducer,
        UsersPage: usersReducer

    }
)


let store = createStore(redusers)


export default store

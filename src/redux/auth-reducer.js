import {authMeApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }

}

export default authReducer

export const SetAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})
export const authMeThunk = () => {
    return (dispatch) => {
        authMeApi()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    dispatch(SetAuthUserData(id, email, login))
                }
            })
    }
}

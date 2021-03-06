import {followApi, getUsersApi, unfollowApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE-IN-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IN_FOLLOWING_PROGRESS:{
            return {
                ...state,
                followingInProgress: action.followingInProgress
            }
        }
        default:
            return state

    }

}

export default usersReducer

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInFollowingProgress = (followingInProgress) =>
    ({type: TOGGLE_IN_FOLLOWING_PROGRESS, followingInProgress})


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        getUsersApi(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleInFollowingProgress(true))
        followApi(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleInFollowingProgress(false))
            })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleInFollowingProgress(true))
        unfollowApi(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleInFollowingProgress(false))
            })
    }
}

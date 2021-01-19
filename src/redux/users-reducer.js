const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {
            id: 1, photoUrl:'https://i.pinimg.com/originals/53/82/61/53826112b69fc3c9318fdedd7a0fbd44.jpg',
            followed: false, fullName: 'Alex Osipenko', status: 'безумно можно быть первым',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 2, photoUrl:'https://i.imgur.com/kRufv86.jpg',
            followed: true, fullName: 'Cristiano Ronaldo', status: 'RM in the heart',
            location: {city: 'Madeira', country: 'Portugal'}
        },
        {
            id: 3, photoUrl:'https://avatars.mds.yandex.net/get-zen_doc/1246934/pub_5b587eb28d974900a904e945_5b587ec204a0a900a9aa4c63/scale_1200',
            followed: true, fullName: 'Zlatan Ibrahimović', status: 'the God',
            location: {city: 'Malmö', country: 'Sweden'}
        },
        {
            id: 4, photoUrl:'https://metaratings.ru/upload/iblock/09a/09a843d2670becf4d9c14ca45b027202.jpg',
            followed: false, fullName: 'Lionel Messi', status: '6 golden ball',
            location: {city: 'Rosario', country: 'Argentina'}
        },
    ],
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state

    }

}

export default usersReducer

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '758acc3e-254f-40a8-9d09-25e8036572bf'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsersApi = (currentPage, pageSize) => {
    return(
    instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => {return response.data}
    ))
}

export const followApi = (userId) =>{
   return  instance.post(`follow/${userId}`)
}
export const unfollowApi = (userId) => {
   return  instance.delete(`follow/${userId}`)
}

export const getProfileApi = (userId) => {
    return  instance.get(`profile/${userId}`)
}
export const authMeApi = () => {
    return  instance.get(`auth/me`)
}

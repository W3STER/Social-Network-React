import { data } from '../modules/fakeData';
import { SET_USERS, ADD_POST_USER, DELETE_POST_USER, SORT_USERS, SEARCH_USERS, SAVE_EDIT, FORM_VALIDATION } from "./types";

const initialState = {
    users: [],
    user: {
        firstName: 'Andrew',
        lastName: 'Wester',
        city: 'Minsk',
        status: 'Oh my god...',
        email: 'wester@mail.net',
        position: 'Frontend developer / ReactJS',
        company: 'Facebook',
        password: 'qwerty',
        // avatar: 'https://sun9-65.userapi.com/c841436/v841436928/457e7/DBHuxyFwzvU.jpg'
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            console.log('action set users')
            return { ...state, users: data }
        case ADD_POST_USER:
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            posts: [...item.posts, action.payload]
                        }
                    }
                    return item
                })
            }
        case DELETE_POST_USER:
            return {
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {
                            ...item,
                            posts: item.posts.filter(item => item.id !== action.postId)
                        }
                    }
                    return item
                })
            }
        case SORT_USERS:
            return {
                ...state,
                users: [...state.users].sort((a, b) => {
                    const nameA = a.firstName
                    const nameB = b.firstName
                    if(nameA < nameB){
                        return -1
                    }
                    if(nameA > nameB){
                        return 1
                    }
                    return 0
                })
            }
        case SEARCH_USERS:
            let value = action.payload.toLowerCase()
            if(value !== ''){
                return {
                    ...state,
                    users: [...state.users.filter(item => item.firstName.toLowerCase().includes(value) || item.lastName.toLowerCase().includes(value))]
                }
            }else {
                return {
                    ...state,
                    users: data
                }
            }
        case SAVE_EDIT:
            return {
                ...state,
                user: {
                    ...state.user,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    city: action.payload.city,
                    email: action.payload.email,
                    password: action.payload.password,
                    confirmPassword: action.payload.confirmPassword
                }
            }
        default: return state;
    }
}
import { SET_USERS, ADD_POST, ADD_POST_USER, DELETE_POST, DELETE_POST_USER, SORT_USERS, SEARCH_USERS, SAVE_EDIT, SHARE_NEWS, FORM_VALIDATION, DELETE_FAVORITES } from "./types";

export function setUsers(){
    console.log('set users')
    return {
        type: SET_USERS
    }
}

export function addPost(post){
    return {
        type: ADD_POST,
        payload: post
    }
}

export function addPostUser(post, id){
    return {
        type: ADD_POST_USER,
        payload: post,
        userId: id
    }
}

export function deletePost(id){
    return {
        type: DELETE_POST,
        postId: id
    }
}

export function deletePostUser(userId, postId){
    return {
        type: DELETE_POST_USER,
        userId: userId,
        postId: postId
    }
}

export function sortUsers(){
    return {
        type: SORT_USERS
    }
}

export function searchUsers(value){
    return {
        type: SEARCH_USERS,
        payload: value
    }
}

export function saveEdit(value){
    return {
        type: SAVE_EDIT,
        payload: value
    }
}

export function shareNews(obj){
    return {
        type: SHARE_NEWS,
        payload: obj
    }
}

export function deleteFavorites(id){
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}


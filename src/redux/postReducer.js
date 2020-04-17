import { ADD_POST, INIT_POSTS, DELETE_POST } from "./types";
const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch(action.type){
        case INIT_POSTS:
            return state.posts
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state, 
                posts: state.posts.filter(item => item.id != action.postId)
            }
        default: return state
    }
}
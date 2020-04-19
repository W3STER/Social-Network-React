import { SHARE_NEWS, DELETE_FAVORITES } from "./types";
const initialState = {
    favorites: []
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case SHARE_NEWS:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.publishedAt !== action.payload)
            }
        default: return state
    }
}
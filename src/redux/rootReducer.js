import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { newsReducer } from "./newsReduser";

export const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    news: newsReducer
})
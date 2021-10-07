import commentsReducer from "./comments";
import postsReducer from "./post";
import {usersReducer} from "./users"
import { combineReducers } from "redux";


export const entitiesReducer = combineReducers ({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})


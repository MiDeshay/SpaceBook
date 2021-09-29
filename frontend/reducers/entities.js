import { combineReducers } from "redux";
import postsReducer from "./post";
import {usersReducer} from "./users"


export const entitiesReducer = combineReducers ({
    users: usersReducer,
    posts: postsReducer
})


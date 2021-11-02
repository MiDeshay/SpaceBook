import commentsReducer from "./comments";
import postsReducer from "./post";
import {usersReducer} from "./users"
import { combineReducers } from "redux";
import friendsReducer from "./friends";


export const entitiesReducer = combineReducers ({
    users: usersReducer,
    posts: postsReducer,
    friends: friendsReducer
})

